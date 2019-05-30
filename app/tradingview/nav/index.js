'use strict';

const user = require('./user');
const watchlist = require('./watchlist');

const delay = (timeout = 1000) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

const tradingview = (page, config) => {
  if(!page || !config) throw new Error('Missing required params');
  const defaultUrl=`${config.site}/chart/${config.chart.id}/`;
  return {
    defaultUrl,
    user: Object.assign({}, user(page, delay, config.user, config.interfaces.signin,defaultUrl)),
    watchlist: Object.assign({}, watchlist(page, config.interfaces.watchlist))
  };

};
module.exports = tradingview;