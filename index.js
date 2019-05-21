'use strict';

const puppeteer = require('puppeteer');
const config = require('./config');
const tradingview = require('./tradingview');

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
  f12.on('Network.webSocketFrameReceived', tv.socket.listener);
  
  await tv.user.signIn();
  await tv.watchlist.open();
  //  console.log(tv);

  // await page.screenshot({ path: `./log/captures/${Date.now()}.png` });

})();