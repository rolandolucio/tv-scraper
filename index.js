'use strict';
// https://stackoverflow.com/questions/48375700/how-to-use-puppeteer-to-dump-websocket-data
/*
https: //github.com/GoogleChrome/puppeteer/issues/3547
Here 's how I capture web socket by Puppeteer and CDP.

browser = await puppeteer.launch(config);
page = (await browser.pages())[0];
//...
f12 = await page.target()
  .createCDPSession();
await f12.send('Network.enable');
await f12.send('Page.enable');
//...
f12.on('Network.webSocketFrameReceived', handleWebSocketFrameReceived);
//...
const handleWebSocketFrameReceived = (params) => {
  const payload = params.response.payloadData;
}
*/

const puppeteer = require('puppeteer');
const config =require('./config');
const configP={
  headless:false,
  defaultViewport:{
    width:1340,
    height:750
  }
};
//console.log(JSON.stringify(config, null, 2));
(async ()=>{
  const browser = await puppeteer.launch(configP);
  const page = (await browser.pages())[0];

  const f12 = await page.target()
    .createCDPSession();
  await f12.send('Network.enable');
  await f12.send('Page.enable');

  const handleWebSocketFrameReceived = (params) => {
    const payload = params.response.payloadData != undefined ? params.response.payloadData:{};
    console.log(params);
    console.log(payload);
  };
  const chartUrl = `${config.tv.site}/chart/${config.tv.chart.id}/`;
  console.log(chartUrl);
  await page.goto(chartUrl, { waitUntil: 'domcontentloaded' });
  await page.screenshot({ path: `./log/captures/${Date.now()}.png` });
  f12.on('Network.webSocketFrameReceived', handleWebSocketFrameReceived);
  
  
})();

