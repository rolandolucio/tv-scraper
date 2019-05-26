webSocketCreated


```js
// Public Socket
{ requestId: '1000008652.14',
  url:
   'wss://data.tradingview.com/socket.io/websocket?from=chart%2Faw518iAg%2F&date=2019_05_21-12_04',
  initiator: { type: 'script', stack: { callFrames: [Array] } } 
}

{ requestId: '1000008652.24',
  url: 'wss://pushstream.tradingview.com/message-pipe-ws/public',
  initiator: { type: 'script', stack: { callFrames: [Array] } } }

// After Login

{ requestId: '1000008652.225',
  url:
   'wss://pushstream.tradingview.com/message-pipe-ws/private_VTXqAgzwgHkj1UShzEJM07mKyWWyQKwsoLcg95JXRfU',
  initiator: { type: 'script', stack: { callFrames: [Array] } } }  

{ requestId: '1000008652.261',
  url:
   'wss://prodata.tradingview.com/socket.io/websocket?from=chart%2Faw518iAg%2F&date=2019_05_21-12_04',
  initiator: { type: 'script', stack: { callFrames: [Array] } } }

```

Extended 
```json
 {"requestId":"1000010948.264","url":"wss://pushstream.tradingview.com/message-pipe-ws/public","initiator":{"type":"script","stack":{"callFrames":[{"functionName":"","scriptId":"257","url":"https://www.tradingview.com/static/bundles/main_chart.77b42bd3c60060809914.js","lineNumber":326,"columnNumber":2154},{"functionName":"","scriptId":"257","url":"https://www.tradingview.com/static/bundles/main_chart.77b42bd3c60060809914.js","lineNumber":422,"columnNumber":869},{"functionName":"_connectChannels","scriptId":"257","url":"https://www.tradingview.com/static/bundles/main_chart.77b42bd3c60060809914.js","lineNumber":355,"columnNumber":2097},{"functionName":"_instantiatePushStream","scriptId":"257","url":"https://www.tradingview.com/static/bundles/main_chart.77b42bd3c60060809914.js","lineNumber":354,"columnNumber":1712},{"functionName":"_init","scriptId":"257","url":"https://www.tradingview.com/static/bundles/main_chart.77b42bd3c60060809914.js","lineNumber":354,"columnNumber":859},{"functionName":"","scriptId":"257","url":"https://www.tradingview.com/static/bundles/main_chart.77b42bd3c60060809914.js","lineNumber":356,"columnNumber":2189},{"functionName":"TxTq","scriptId":"257","url":"https://www.tradingview.com/static/bundles/main_chart.77b42bd3c60060809914.js","lineNumber":356,"columnNumber":2881},{"functionName":"c","scriptId":"15","url":"https://www.tradingview.com/static/bundles/runtime.62dd646a7acf52a4ce7e.js","lineNumber":0,"columnNumber":496},{"functionName":"roqP","scriptId":"257","url":"https://www.tradingview.com/static/bundles/main_chart.77b42bd3c60060809914.js","lineNumber":647,"columnNumber":1584},{"functionName":"c","scriptId":"15","url":"https://www.tradingview.com/static/bundles/runtime.62dd646a7acf52a4ce7e.js","lineNumber":0,"columnNumber":496},{"functionName":"KVvs","scriptId":"257","url":"https://www.tradingview.com/static/bundles/main_chart.77b42bd3c60060809914.js","lineNumber":260,"columnNumber":762},{"functionName":"c","scriptId":"15","url":"https://www.tradingview.com/static/bundles/runtime.62dd646a7acf52a4ce7e.js","lineNumber":0,"columnNumber":496},{"functionName":"","scriptId":"257","url":"https://www.tradingview.com/static/bundles/main_chart.77b42bd3c60060809914.js","lineNumber":253,"columnNumber":2156},{"functionName":"KCAb","scriptId":"257","url":"https://www.tradingview.com/static/bundles/main_chart.77b42bd3c60060809914.js","lineNumber":256,"columnNumber":2360},{"functionName":"c","scriptId":"15","url":"https://www.tradingview.com/static/bundles/runtime.62dd646a7acf52a4ce7e.js","lineNumber":0,"columnNumber":496},{"functionName":"a","scriptId":"15","url":"https://www.tradingview.com/static/bundles/runtime.62dd646a7acf52a4ce7e.js","lineNumber":0,"columnNumber":387},{"functionName":"d","scriptId":"15","url":"https://www.tradingview.com/static/bundles/runtime.62dd646a7acf52a4ce7e.js","lineNumber":0,"columnNumber":249},{"functionName":"","scriptId":"257","url":"https://www.tradingview.com/static/bundles/main_chart.77b42bd3c60060809914.js","lineNumber":0,"columnNumber":46}]}}}
```


webSocketClosed
```
{ requestId: '1000010948.23', timestamp: 3860.415054 }
```

webSocketFrameSent 

```js
// Signed Text
 { requestId: '1000008652.261',
  timestamp: 8024.663907,
  response:
   { opcode: 1,
     mask: true,
     payloadData:
      '~m~55~m~{"m":"chart_create_session","p":["cs_xkd21F2c6xIU",""]}' } }

// protobuf signed 
 { requestId: '1000008652.261',
  timestamp: 8034.582438,
  response: { opcode: 2, mask: true, payloadData: 'fm1+NH5tfn5ofjE=' } }      
```

webSocketFrameReceived

```js
// txt signed
{ requestId: '1000008652.261',
  timestamp: 8027.125993,
  response:
   { opcode: 1,
     mask: false,
     payloadData:
      '~m~95~m~{"m":"qsd","p":["qs_cC2wPCt1dRcI",{"n":"BITSTAMP:XRPUSD","s":"ok","v":{"lp_time":1558466760}}]}' } }

// protobuf signed 
 { requestId: '1000008652.261',
  timestamp: 8034.581889,
  response: { opcode: 2, mask: false, payloadData: 'fm1+NH5tfn5ofjE=' } }     
```

Protocol Switch
webSocketFrameSent or webSocketFrameReceived
```js
 { requestId: '1000008652.261',
  timestamp: 8030.461588,
  response:
   { opcode: 1,
     mask: true,
     payloadData: '~m~40~m~{"m":"switch_protocol","p":["protobuf"]}' } }
 
 { requestId: '1000008652.261',
  timestamp: 8030.527249,
  response:
   { opcode: 1,
     mask: false,
     payloadData: '~m~42~m~{"m":"protocol_switched","p":["protobuf"]}' } }
```
