'use strict';

const io = require('./../io');
const parser =  require('./../parse');

/**
 *
 *
 * @class Sockets
 */
  //f12.on('Network.webSocketFrameReceived', tv.socket.listener);
  /*
  
  */
  // let mockup = [{
  //     requestId: '1000008652.14',
  //     url: 'wss://data.tradingview.com/socket.io/websocket?from=chart%2Faw518iAg%2F&date=2019_05_21-12_04',
  //     initiator: { type: 'script', stack: {} }
  //   },
  //   {
  //     requestId: '1000008652.24',
  //     url: 'wss://pushstream.tradingview.com/message-pipe-ws/public',
  //     initiator: { type: 'script', stack: { callFrames: 123 } }
  //   }
  // ];
  // mockup.map(i => {
  //   const socketParsed = socketType(i);
  //   sockets.push(socketParsed);
  // });
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