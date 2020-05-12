# tv-scraper draft

-- archive -- 
Trading View now use webhooks
----

http clone
https://github.com/GoogleChrome/puppeteer/issues/3547

https://chromedevtools.github.io/devtools-protocol/tot/Network/#event-webSocketFrameReceived

Private JSON (alerts accts) Socket
  wss://pushstream.tradingview.com/message-pipe-ws/private_VTXqAgzwgHkj1UShzEJM07mKyWWyQKwsoLcg95JXRfU
  { "id": 6, "channel": "private_VTXqAgzwgHkj1UShzEJM07mKyWWyQKwsoLcg95JXRfU", "text": { "content": { "state": { "t": "snapshot", "s": {} } }, "channel": "screener_alerts" } }
  channel & url key path 4 users /private_(.*?)/


WebSocket Request
```
Request URL: wss://pushstream.tradingview.com/message-pipe-ws/private_VTXqAgzwgHkj1UShzEJM07mKyWWyQKwsoLcg95JXRfU
Request Method: GET
Status Code: 101 Switching Protocols
```

RESPONSE HEADERS
```
HTTP/1.1 101 Switching Protocols
Expires: Thu, 01 Jan 1970 00:00:01 GMT
Cache-Control: no-cache, no-store, must-revalidate
Upgrade: WebSocket
Connection: Upgrade
Sec-WebSocket-Accept: l+yw0v+c9tc2beVneBI+Mx26HnE=
```

Request HEADERS
```
Accept-Encoding: gzip, deflate, br
Accept-Language: es,en-US;q=0.9,en;q=0.8
Cache-Control: no-cache
Connection: Upgrade
Host: pushstream.tradingview.com
Origin: https://www.tradingview.com
Pragma: no-cache
Sec-WebSocket-Extensions: permessage-deflate; client_max_window_bits
Sec-WebSocket-Key: YfvH8naw/zTB7BTnY3/6CA==
Sec-WebSocket-Version: 13
Upgrade: websocket
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36
```

bin socket
------------------------------------------
general
```
Request URL: wss://prodata.tradingview.com/socket.io/websocket?from=chart%2Faw518iAg%2F&date=2019_05_21-12_04
Request Method: GET
Status Code: 101 Switching Protocols
```
response
```
Connection: upgrade
Date: Tue, 21 May 2019 17:55:03 GMT
Sec-WebSocket-Accept: 1+TzFcF2aUHXGKt3CofQlMU8usk=
Server: tv
Upgrade: websocket
```
request
```
Accept-Encoding: gzip, deflate, br
Accept-Language: es,en-US;q=0.9,en;q=0.8
Cache-Control: no-cache
Connection: Upgrade
Host: prodata.tradingview.com
Origin: https://www.tradingview.com
Pragma: no-cache
Sec-WebSocket-Extensions: permessage-deflate; client_max_window_bits
Sec-WebSocket-Key: V/VRkbd8FXneFHMCIK/7aw==
Sec-WebSocket-Version: 13
Upgrade: websocket
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36
```
query string
```
from: chart/aw518iAg/
date: 2019_05_21-12_04
```


TV PROTO FILES?????

https://gist.github.com/inesusvet/6f860def3d74768b0682acf376f53926
https://s.tradingview.com/static/bundles/embed/protobuf-handler.cbf9ab3393183450c5a5.js

========================

webSocketFrameSent
 { requestId: '1000003764.262',
  timestamp: 6555.676965,
  response:
   { opcode: 1,
     mask: true,
     payloadData:
      '~m~52~m~{"m":"quote_create_session","p":["qs_lwBlCQ1EK1ET"]}' } }


webSocketFrameSent
 { requestId: '1000003764.262',
  timestamp: 6555.94571,
  response:
   { opcode: 1,
     mask: true,
     payloadData:
      '~m~68~m~{"m":"quote_fast_symbols","p":["qs_lwBlCQ1EK1ET","BITSTAMP:BTCUSD"]}' } }


webSocketFrameSent
 { requestId: '1000003764.262',
  timestamp: 6557.925819,
  response:
   { opcode: 1,
     mask: true,
     payloadData:
      '~m~86~m~{"m":"quote_fast_symbols","p":["qs_lwBlCQ1EK1ET","BITSTAMP:BTCUSD","BITSTAMP:XRPUSD"]}' } }

webSocketFrameSent
 { requestId: '1000003764.262',
  timestamp: 6561.46005,
  response:
   { opcode: 1,
     mask: true,
     payloadData: '~m~40~m~{"m":"switch_protocol","p":["protobuf"]}' } }      

 { requestId: '1000008652.261',
  timestamp: 8026.806471,
  response:
   { opcode: 1,
     mask: false,
     payloadData:
      '~m~95~m~{"m":"qsd","p":["qs_cC2wPCt1dRcI",{"n":"BITSTAMP:XRPUSD","s":"ok","v":{"lp_time":1558466760}}]}' } }
webSocketFrameReceived 
 { requestId: '1000008652.261',
  timestamp: 8026.811531,
  response:
   { opcode: 1,
     mask: false,
     payloadData:
      '~m~505~m~{"m":"qsd","p":["qs_cC2wPCt1dRcI",{"n":"BITSTAMP:XRPUSD","s":"ok","v":{"ch":-0.00059000000000000002963,"chp":-0.14999999999999999445,"currency_code":"USD","current_session":"market","description":"XRP / Dollar","exchange":"BITSTAMP","fractional":false,"is_tradable":true,"lp":0.39840999999999998638,"minmov":1,"minmove2":0,"original_name":"BITSTAMP:XRPUSD","pricescale":100000,"pro_name":"BITSTAMP:XRPUSD","short_name":"XRPUSD","type":"bitcoin","update_mode":"streaming","volume":27070918.212904211134}}]}' } }


webSocketFrameSent 
 { requestId: '1000008652.261',
  timestamp: 8027.061539,
  response:
   { opcode: 1,
     mask: true,
     payloadData:
      '~m~86~m~{"m":"quote_fast_symbols","p":["qs_cC2wPCt1dRcI","BITSTAMP:BTCUSD","BITSTAMP:XRPUSD"]}' } }