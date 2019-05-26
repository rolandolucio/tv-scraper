'use strict';

const io = require('./../io');

const parser = (preparsed, debug = 0) => {
  let parsed = preparsed;
  let { type, res } = preparsed;
  let newres = [];
  switch (type) {
  case 'json':
    newres = res.reduce((obj, item) => {
      switch (true) {
      case item.text.channel === 'alert':
        let alert = JSON.parse(item.text.content);
        if(alert.m === 'event' && alert.p.snd_file === 'alert/fired') {

          obj.push({
            event: 'alert',
            cmd: 'fired',
            p: {
              symbol: alert.p.sym,
              desc: alert.p.desc,
              res: alert.p.res,
              aid: alert.p.aid,
              time: Date.now(),
            }
          });
        }
        break;

      default:
        break;
      }
      return obj;
    }, []);
    break;
  case 'proto':
    newres = res.reduce((obj, item) => {
      switch (true) {
      case item.m === 'qsd' && item.p.lp !== 0 && item.p.high_price === 0 && item.p.low_price === 0:
        obj.push({
          event: 'watchlist',
          cmd: 'update',
          p: { 
            symbol: item.p.symbol_name,
            lp: item.p.lp,
            volume: item.p.volume,
            time: Date.now()
          }
        });
        break;

      default:
        break;
      }
      return obj;
    },[]);
    break;
    case 'text':
      newres = res.reduce((obj, item) => {
        switch (true) {
        case item.m === 'qsd':
          if(typeof item.p[1].n != "undefined" && typeof item.p[1].v.lp != "undefined" && typeof item.p[1].v.volume != "undefined"){
            obj.push({
              event: 'watchlist',
              cmd: 'update',
              p: {
                symbol: item.p[1].n,
                lp: item.p[1].v.lp,
                volume: item.p[1].v.volume,
                time: Date.now(),
                t: 'txt'
              }
            });
          }
          break;

        default:
          break;
        }
        return obj;
      }, []);
      break;
  default:
    break;
  }
  parsed.res = newres;
  return parsed;
};

/**
 *
 *
 * @class Sockets
 */
class Sockets {

  constructor({ sockets } = {}) {
    this.sockets = sockets || [];
  }
  add(data) {
    this.sockets.push(this.type(data));
  }
  remove(requestId) {
    this.sockets = this.sockets.filter(item => item.requestId !== requestId);
  }
  find(requestId) {
    return this.sockets.find(item => item.requestId === requestId);
  }
  listener({ requestId, opcode, way, payload, parse = true, debug = 0 }) {
    const socketInfo = this.find(requestId);
    const preparsed = io.reader({
      source: socketInfo.requestId,
      type: socketInfo.type,
      opcode,
      payload,
      way,
      origin: socketInfo.origin
    });
    /** TODO; mental burn fix this tech debt, mean while works */
    if(!parse || preparsed.code > 399) {
      /** Returns with out parsing or if err */
      return preparsed;
    } else {
      let parsed = parser(preparsed, debug);
      // console.log(parsed.res.length);
      if(parsed.res.length < 1) {
        parsed.code = 404;
      }
      return parsed;
    }

  }
  /**
   *
   *
   * @param {*} {
   *     requestId,
   *     url,
   *     initiator
   *   }
   * @returns
   * @memberof Sockets
   */
  type({
    requestId,
    url,
    initiator
  }) {
    const urls = {
      datasocket: {
        public: 'wss://data.tradingview.com/socket.io/',
        private: 'wss://prodata.tradingview.com/socket.io/'
      },
      pushstream: {
        public: 'wss://pushstream.tradingview.com/message-pipe-ws/public',
        private: 'wss://pushstream.tradingview.com/message-pipe-ws/private'
      }
    };
    let type;
    let origin;
    let token;
    let channel;
    let code = 200;
    switch (true) {
    case url.match(urls.datasocket.public) != null:
      type = 'datasocket';
      origin = 'public';
      break;
    case url.match(urls.datasocket.private) != null:
      type = 'datasocket';
      origin = 'private';
      break;
    case url.match(urls.pushstream.public) != null:
      type = 'pushstream';
      origin = 'public';
      break;
    case url.match(urls.pushstream.private) != null:
      type = 'pushstream';
      origin = 'private';
      token = url.split(urls.pushstream.private);
      //console.log('token===',token);
      channel = `private${token[1]}`;
      break;
    default:
      code = 500;
      break;
    }

    return {
      code,
      requestId,
      type,
      origin,
      channel,
      initiator
    };

  }
}

module.exports = Sockets;