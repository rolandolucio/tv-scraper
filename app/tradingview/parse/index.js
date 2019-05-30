'use strict';
/**
 * @todo split cases to module funcs as needed
 *
 * @param {*} preparsed
 * @param {number} [debug=0]
 * @returns
 */
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
              fire_time: alert.p.fire_time,
              bar_time: alert.p.bar_time,
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
    }, []);
    break;
  case 'text':
    newres = res.reduce((obj, item) => {
      switch (true) {
      case item.m === 'qsd':
        if(typeof item.p[1].n != "undefined" && typeof item.p[1].v.lp != "undefined" && typeof item.p[1].v.volume != "undefined") {
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

module.exports = parser;