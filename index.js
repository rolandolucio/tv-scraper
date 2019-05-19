'use strict';
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



//const config = require('./lib/auto-load')(__dirname + '/config');
const config =require('./config');

console.log(JSON.stringify(config, null, 2));