'use strict';

/**
 *
 *
 * @param {*} [elements=[]]
 * @param {string} [split=':']
 * @returns
 */
const getParams = (elements = [], split = ':') => {
  if(elements.length < 1) return undefined;
  const details = elements.reduce((o, i) => {
    let param = i.trim()
      .split(split);
    const obj = param.length === 2 ? {
      [param[0]]: param[1]
    } : undefined;
    Object.assign(o, obj);
    return o;
  }, {});
  return Object.keys(details)
    .length > 0 ? details : undefined;
};

/**
 *
 *
 * @param {string} [alert={ desc: '' }]
 * @returns
 */
const validate = (alert = { desc: '' }) => {
  const botMark = alert.desc.trim()
    .split(';');
  if(botMark !== undefined && botMark[0].trim() === 'b' && botMark.length >= 3) {
    const id = botMark[1].toString()
      .trim();
    const params = botMark[2].trim()
      .split(',');
    const p = getParams(params, ':');
    return {
      id,
      p
    };
  } else {
    return undefined;
  }
};

/**
 *
 *
 * @param {*} watchlist
 * @param {*} event
 * @returns
 */
const assemble = (watchlist, event) => {
  const alert = event.p;
  const sg = validate(alert);
  if(sg === undefined) return undefined;
  const symbol = watchlist.find(item => item.symbol === alert.symbol);
  let wl;
  if(symbol === undefined) {
    // not in watchlist
    wl = {
      s: alert.symbol,
      c: 404,
      p: undefined
    };
  } else if(symbol.lp <= 0) {
    // in watch list but value 0
    wl = {
      s: symbol.symbol,
      c: 417,
      p: undefined
    };
  } else {
    // good
    wl = {
      s: symbol.symbol,
      c: 200,
      p: symbol.price,
      v: symbol.volume,
      u: symbol.updated
    };
  }
  return {
    wl,
    sg,
    meta: {
      aid: alert.aid,
      time: {
        bar: alert.bar_time,
        fire: alert.fire_time,
        catch: alert.time,
        assemble: Date.now()
      }
    },
    hash: `tv_${alert.aid.toString(16)}_${alert.fire_time.toString(16)}`
  };
};

module.exports = assemble;
// const alert = { desc: 'b;123;i:$self,cmd:Relay' };

// console.log(validate(alert));