'use strict';

const puppeteer = require('puppeteer');
const config = require('./config');
const tradingview = require('./app/tradingview/nav');
const assemble = require('./app/signal/assemble');
// default symbols
/** @todo may need to change to stream & monad patter for
 * reliability and performance, for now racing data is fine
 */
let watchlist = [{
    symbol: 'BITSTAMP:BTCUSD',
    price: 0.000000,
    volume: 0.000000,
    updated: 0
  },
  {
    symbol: '(COINBASE:BTCUSD+BITSTAMP:BTCUSD)/2',
    price: 0.000000,
    volume: 0.000000,
    updated: 0
  },
  {
    symbol: 'BITSTAMP:XRPUSD',
    price: 0.000000,
    volume: 0.000000,
    updated: 0
  },
];

/**
 *
 *
 * @param {*} [watchlist=[]]
 * @param {*} data
 * @returns
 */
const wlUpdate = (data, watchlist = []) => {
  /** 
   * @todo data validation 
   */
  const obj = {
    symbol: data.symbol,
    price: data.lp,
    volume: data.volume,
    updated: data.time
  };
  const i = watchlist.findIndex(item => item.symbol === data.symbol);
  if(i < 0) {
    watchlist.push();
  } else {
    watchlist[i] = obj;
  }
  return watchlist;
};




let displayC = 0;
(async () => {

  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: {
      width: 1340,
      height: 750
    }
  });
  const page = (await browser.pages())[0];

  const f12 = await page.target()
    .createCDPSession();
  await f12.send('Network.enable');
  await f12.send('Page.enable');
  const tv = tradingview(page, config.tv);

  const sockets = require('./app/tradingview/socket');
  const sobj = new sockets();

  f12.on('Network.webSocketCreated', (data) => {
    sobj.add(data);
  });
  f12.on('Network.webSocketClosed', (data) => {
    sobj.remove(data.requestId);
  });
  // f12.on('Network.webSocketWillSendHandshakeRequest', (data) => {
  //   console.log('webSocketWillSendHandshakeRequest \n', data);
  // });
  // f12.on('Network.webSocketHandshakeResponseReceived', (data) => {
  //   console.log('webSocketHandshakeResponseReceived \n', data);
  // });
  // f12.on('Network.webSocketFrameSent', (data) => {
  //   // console.log('webSocketFrameSent \n', data);
  // });
  f12.on('Network.webSocketFrameReceived', (data) => {
    //console.log('webSocketFrameReceived \n', data);
    const msg = sobj.listener({
      requestId: data.requestId,
      opcode: data.response.opcode,
      way: 'input',
      payload: data.response.payloadData,
      //parse:false
    });
    if(msg.code < 400) {
      msg.res.map((item) => {
        //console.log(JSON.stringify(item));
        if(item.event === 'watchlist' && item.cmd === 'update') {
          watchlist = wlUpdate(item.p, watchlist);
          // if(displayC % 10 === 0) console.log('======= \n',watchlist);
          // displayC++;
        }
        if(item.event === 'alert' && item.cmd === 'fired') {
          console.log(assemble(watchlist,item));
        }
      });
    }
  });


  await tv.user.signIn();
  await tv.watchlist.open();
  //  console.log(tv);

  // await page.screenshot({ path: `./log/captures/${Date.now()}.png` });

})();