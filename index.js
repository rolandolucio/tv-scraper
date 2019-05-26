'use strict';

const puppeteer = require('puppeteer');
const config = require('./config');
const tradingview = require('./tradingview/nav');

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

  const sockets = require('./tradingview/socket');
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
      requestId:data.requestId,
      opcode:data.response.opcode,
      way: 'input',
      payload: data.response.payloadData
    });
    if( msg.code < 400){ 
      msg.res.map( (item) => {
        console.log(JSON.stringify(item));
      });
      
    }
  });
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

  


  await tv.user.signIn();
  await tv.watchlist.open();
  //  console.log(tv);
  
  
  
  // await page.screenshot({ path: `./log/captures/${Date.now()}.png` });

})();