// // http://www.onicos.com/staff/iz/amuse/javascript/expert/utf.txt

// /* utf.js - UTF-8 <=> UTF-16 convertion
//  *
//  * Copyright (C) 1999 Masanao Izumo <iz@onicos.co.jp>
//  * Version: 1.0
//  * LastModified: Dec 25 1999
//  * This library is free.  You can redistribute it and/or modify it.
//  */

// function Utf8ArrayToStr(array) {
//   var out, i, len, c;
//   var char2, char3;

//   out = "";
//   len = array.length;
//   i = 0;
//   while(i < len) {
//     c = array[i++];
//     switch (c >> 4) {
//     case 0:
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//     case 7:
//       // 0xxxxxxx
//       out += String.fromCharCode(c);
//       break;
//     case 12:
//     case 13:
//       // 110x xxxx   10xx xxxx
//       char2 = array[i++];
//       out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
//       break;
//     case 14:
//       // 1110 xxxx  10xx xxxx  10xx xxxx
//       char2 = array[i++];
//       char3 = array[i++];
//       out += String.fromCharCode(((c & 0x0F) << 12) |
//         ((char2 & 0x3F) << 6) |
//         ((char3 & 0x3F) << 0));
//       break;
//     }
//   }

//   return out;
// }


// function n() {
//   this._binFrame = new Uint8Array([126, 109, 126]);
// }

// n.prototype._decode = function (t) {
//   var e, n, o = [];
//   do {
//     if("~m~" !== t.substr(0, 3)) return o;
//     e = "", n = "";
//     for(var s = (t = t.substr(3))
//         .length, i = 0; i < s; i++) {
//       if(n = Number(t.substr(i, 1)), Number(t.substr(i, 1)) !== n) {
//         t = t.substr(e.length + "~m~".length), e = Number(e);
//         break;
//       }
//       e += n
//     }
//     o.push(t.substr(0, e)), t = t.substr(e)
//   } while("" !== t);
//   return o
// };
// n.prototype._encode = function (t) {
//   for(var o, s = "", i = Array.isArray(t) ? t : [t], r = i.length, c = 0; c < r; c++) s += "~m~" + (o =
//       null === i[c] || void 0 === i[c] ? "" : n._stringify(i[c]))
//     .length + "~m~" + o;
//   return s
// };
// n._stringify = function (t) {
//   return "[object Object]" === Object.prototype.toString.call(t) ? "~j~" + JSON.stringify(t) : String(t);
// };
// n.prototype._binEncode = function (t) {
//   for(var o = Array.isArray(t) ? t : [t], s = o.length, i = 0; i < s; i++) o[i] = null === o[i] || void 0 ===
//     o[i] ? "" : o[i], o[i] = "string" == typeof o[i] ? n._str2ab(o[i]) : o[i];
//   var r = new Uint8Array(0);
//   for(i = 0; i < s; i++) {
//     var c = this._binEncodeMessage(o[i]),
//       h = new Uint8Array(r.length + c.length);
//     h.set(r, 0), h.set(c, r.byteLength), r = h
//   }
//   return r
// };
// n.prototype._binEncodeMessage = function (t) {
//   var e = n._str2ab(t.byteLength.toString()),
//     o = 3 + e.length + 3 + t.byteLength,
//     s = new Uint8Array(o),
//     i = 0;
//   return s.set(this._binFrame, i), i += this._binFrame.length, s.set(e, i), i += e.length, s.set(this._binFrame, i), i += this._binFrame.length, s.set(new Uint8Array(t), i), i += t.length, s
// };
// n._str2ab = function (t) {
//   for(var e = new Uint8Array(t.length), n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
//   return e
// };
// n.prototype._binDecode = function (t) {
//   for(var e = 0, n = [], o = t.length; e < o;) {
//     if(e + 3 > o) throw new Error("Invalid buffer length");
//     if(126 !== t[e] || 109 !== t[e + 1] || 126 !== t[e + 2]) throw new Error(
//       "Malformed ~m~ signature");
//     e += 3;
//     for(var s = 0; e < o; e++) {
//       var i = t[e] - 48;
//       if(i < 0 || i > 9) break;
//       s = 10 * s + i
//     }
//     if(s + e + 3 > o) throw new Error("Invalid buffer length");
//     if(126 !== t[e] || 109 !== t[e + 1] || 126 !== t[e + 2]) throw new Error(
//       "Malformed ~m~ signature");
//     e += 3, n.push(t.subarray(e, e + s)), e += s
//   }
//   var o = n.length;
//   // if(n && n.length)
//   //   for(var s = 0; s < o; s++) this._onMessage(n[s]);
//   return n;
// };
// n.prototype._onMessage = function (e) {
//   this._checkIfHeartbeat(e) ? this._onHeartbeat(e.subarray(3)) : this._checkIfJson(e) ? this._onMessage(JSON.parse(e.slice(3))) : this._onMessage(e);
// };
// n.prototype._checkIfHeartbeat = function (t) {
//   return this._checkMessageType(t, "h");
// };
// n.prototype._checkIfJson = function (t) {
//   return this._checkMessageType(t, "j")
// };
// n.prototype._checkMessageType = function (e, n) {

//   var o = n.charCodeAt(0);
//   if(126 === e[0] && e[1] === o && 126 === e[2]) return !0;

//   return !1;
// };
// n.prototype._onHeartbeat = function (e) {
//   var o = this._websocketType === t.Binary ? n._ab2str(e) : e;
//   this.send("~h~" + o)
// };


// //////////////////////////////////////////////////////////

// var obj = new n();
// var parseStr = {
//   json: '{"id":2,"channel":"private_VTXqAgzwgHkj1UShzEJM07mKyWWyQKwsoLcg95JXRfU","text":{"content":{"trigger":{"t":"trigger","ae":{}}},"channel":"screener_alerts"}}',
//   tv: '~m~141~m~{"m":"qsd","p":["qs_NxbX6Jfp7lFA",{"n":"BITSTAMP:BTCUSD","s":"ok","v":{"ask":8004.8000000000001819,"ask_size":0,"bid":7996.0,"bid_size":0}}]}~m~883~m~{"m":"qsd","p":["qs_NxbX6Jfp7lFA",{"n":"BITSTAMP:BTCUSD","s":"ok","v":{"base_name":["BITSTAMP:BTCUSD"],"broker_names":{},"ch":-0.83999999999999996891,"chp":-0.010000000000000000208,"currency_code":"USD","current_session":"market","description":"Bitcoin / Dollar","exchange":"BITSTAMP","fractional":false,"high_price":8069.3400000000001455,"is_tradable":true,"listed_exchange":"BITSTAMP","low_price":7676.2700000000004366,"lp":8004.8000000000001819,"minmov":1,"minmove2":0,"open_price":8007.6700000000000728,"open_time":1558396800,"original_name":"BITSTAMP:BTCUSD","pointvalue":1.0,"prev_close_price":8005.6400000000003274,"pricescale":100,"pro_name":"BITSTAMP:BTCUSD","pro_perm":"","short_description":"Bitcoin / Dollar","short_name":"BTCUSD","symbol_status":"realtime","timezone":"Etc/UTC","type":"bitcoin","typespecs":[],"update_mode":"streaming","volume":6219.8907475200003319}}]}'
// }
// var parseBuffer = 'fm1+NjB+bX4IJxI4Cg9xc19FcGVjRE9pZzdFRzESJVsiQklUU1RBTVA6QlRDVVNEIiwiQklUU1RBTVA6WFJQVVNEIl0=';

// //var t = obj._decode(parseStr.tv);
// //console.log(t);
// // console.log(obj._encode(t));

// /*** 
//  * From sys string to net and back
//  */
// // var textout = parseStr.tv;
// // console.log('========================================================text out\n', textout);
// // var bun = obj._binEncode(textout); //u8array
// // console.log('========================================================bin encoded \n',bun);
// // var buffOut = Buffer.from(bun); // buffer
// // console.log('========================================================BUFER out \n', buffOut);
// // var base64data = buffOut.toString('base64'); // base64 encodebuffer
// // console.log('========================================================base64Out \n', base64data);
// // var buffIn = Buffer.from(base64data, 'base64'); //buffer
// // console.log('========================================================BUFER In\n', buffIn);
// // var textin = buffIn.toString('utf8');
// // console.log('========================================================textin In\n', textin);

// /**
//  * FROM BASE64 protobuff IN
//  */
// // var inBase64 = parseBuffer;
// // var inBuff = Buffer.from(inBase64, 'base64'); //buffer
// // console.log('========================================================BUFER In\n', inBuff);
// // var inUtf8 = inBuff.toString('utf8');
// // console.log('====================================cant be decoded reference only utf8 string\n', inUtf8);
// // var ui8 = new Uint8Array(inBuff);
// // console.log('=================================================buffer in a ui8a \n', ui8);
// // var bid = obj._binDecode(inBuff);
// // console.log('=================================================buffer bindecoder \n',ui8);
// // console.log('========================================================to string utf8 \n', ui8.toString('utf8'));
// // console.log('=================================================Utf8ArrayToStr \n', Utf8ArrayToStr(ui8));



// // https: //github.com/mafintosh/protocol-buffers


// var protobuf = require('protocol-buffers')
// var fs = require('fs')

// // // pass a proto file as a buffer/string or pass a parsed protobuf-schema object
// // var messages = protobuf(fs.readFileSync('tv.proto'))
// // console.log(messages)

// // var mix = messages.Msg.decode(inBuff)
// // console.log('===================== RETYR \n', mix)

// // var messages = protobuf(fs.readFileSync('test.proto'))
// //var messages = protobuf(fs.readFileSync('tv.proto'))

// // var buf = messages.Test.encode({
// //   num: 42,
// //   payload: 'hello world'
// // })

// // console.log(buf) // should print a buffer
// // console.log(buf.toString('base64'));
// //var base64String = 'DQAAKEISC2hlbGxvIHdvcmxk'; // using base test.proto //{ num: 42, payload: 'hello world' }
// //var base64String = 'fm1+NTZ+bX4IKRI0Cg9xc19FcGVjRE9pZzdFRzESD0JJVFNUQU1QOlhSUFVTRBoCb2tR1ljCeAXLYUGaAQJ7fQ=='
// var base64String = 'fm1+Njl+bX4IKRJBCg9xc19ka1ZHT0dKbDJHbHkSD0JJVFNUQU1QOlhSUFVTRBoCb2t1q1vNPn3owc0+hQEAAAAAjQEAAAAAmgECe30=';
// // var base64String =
// //   'fm1+NjB+bX4IJxI4Cg9xc19FcGVjRE9pZzdFRzESJVsiQklUU1RBTVA6QlRDVVNEIiwiQklUU1RBTVA6WFJQVVNEIl0='

// var buf = Buffer.from(`base64`);
// console.log(buf)
// var onBinMsg = obj._binDecode(buf);
// console.log(onBinMsg.length, '=================== \n') // if > 1 map.reduce???
// buf = onBinMsg[0]
// // console.log(buf)
// // var objProto = messages.Msg.decode(buf)
// // console.log(objProto) // should pr
// // var data = objProto.data
// // //console.log(data.toString('utf8'))
// // var dataDecode = messages.qsd.decode(data)
// // console.log(dataDecode) // should pr


// // var messages = require('./messages')

// // var buf = messages.Test.encode({
// //   num: 42,
// //   payload: 'hello world'
// // })
// // console.log(buf)

// const endecode = require('./tradingview/parse/codec');
// const txtBase =
//  '~m~141~m~{"m":"qsd","p":["qs_NxbX6Jfp7lFA",{"n":"BITSTAMP:BTCUSD","s":"ok","v":{"ask":8004.8000000000001819,"ask_size":0,"bid":7996.0,"bid_size":0}}]}~m~883~m~{"m":"qsd","p":["qs_NxbX6Jfp7lFA",{"n":"BITSTAMP:BTCUSD","s":"ok","v":{"base_name":["BITSTAMP:BTCUSD"],"broker_names":{},"ch":-0.83999999999999996891,"chp":-0.010000000000000000208,"currency_code":"USD","current_session":"market","description":"Bitcoin / Dollar","exchange":"BITSTAMP","fractional":false,"high_price":8069.3400000000001455,"is_tradable":true,"listed_exchange":"BITSTAMP","low_price":7676.2700000000004366,"lp":8004.8000000000001819,"minmov":1,"minmove2":0,"open_price":8007.6700000000000728,"open_time":1558396800,"original_name":"BITSTAMP:BTCUSD","pointvalue":1.0,"prev_close_price":8005.6400000000003274,"pricescale":100,"pro_name":"BITSTAMP:BTCUSD","pro_perm":"","short_description":"Bitcoin / Dollar","short_name":"BTCUSD","symbol_status":"realtime","timezone":"Etc/UTC","type":"bitcoin","typespecs":[],"update_mode":"streaming","volume":6219.8907475200003319}}]}';
// const codec = new endecode();
// // const txtDecoded = codec._decode(txtBase);
// // console.log(txtDecoded);
// // console.log(codec._encode(txtDecoded));
// // console.log(codec.Utf8ArrayToStr(Buffer.from(codec._binEncode(txtDecoded))));

//const base64String = 'fm1+Njl+bX4IKRJBCg9xc19ka1ZHT0dKbDJHbHkSD0JJVFNUQU1QOlhSUFVTRBoCb2t1q1vNPn3owc0+hQEAAAAAjQEAAAAAmgECe30=';
// const buff = Buffer.from(base64String, 'base64');
// console.log(buff);
// const unsigned = codec._binDecode(buff);
// console.log(unsigned);
// //unsigned.map(i => console.log(i)); // Each one goes to ProtoBuf parse

// const protobuf = require('./tradingview/parse/protobuf');
// buf = unsigned[0]
// console.log(buf)
// const pb = new protobuf();
// //let objProto = pb.messages.Msg.decode(buf);
// let objProto = pb.decode('Msg',buf);
// console.log(objProto) // should pr
// console.log(pb.encode('Msg', objProto));

const io = require('./tradingview/io');
let res;
const signedText = {
  source: 'sokcetReqId',
  type: 'datasocket',
  opcode:1,
  payload:
    '~m~1437~m~{"m":"qsd","p":["qs_NxbX6Jfp7lFA",{"n":"BITSTAMP:BTCUSD","s":"ok","v":{"session-extended":"24x7","total_value_traded":25235628483.283599854,"total_shares_diluted":21000000,"has-intraday":true,"total_shares_outstanding":17713925,"rt-update-time":"1558466674","adjustment":"none","symbol":"BTCUSD","minmovement":1,"has-dwm":true,"fundamental_data":true,"is-tradable":true,"timezone":"Etc/UTC","minute-bar":{"close":"8010.6300000000","high":"8014.3300000000","low":"8001.3500000000","open":"8010.0800000000","time":"1558466640","update-time":"1558466675.089102","volume":"0.53573092"},"all_time_low":2.2200000000000001954,"history-tag":"","prefix":"BITSTAMP","rt-lag":"1.089102","has-depth":true,"pro-perm":"","minmovement2":0,"exchange-listed":"BITSTAMP","has-no-volume":false,"allowed-adjustment":"none","trade":{"price":"8010.6300000000","size":"0.0356979200","time":"1558466674"},"symbol-proname":"BITSTAMP:BTCUSD","session-regular":"24x7","has-adjustment":false,"group":"bitstamp","intraday-multipliers":"1","feed":"bitstamp","short-description":"Bitcoin / Dollar","exchange-listed-symbol":"BTCUSD","series-key":"BITSTAMP:BTCUSD","all_time_high":19666,"daily-bar":{"close":"8010.6300000000","high":"8069.3400000000","low":"7676.2700000000","open":"8007.6700000000","time":"1558396800","update-time":"1558466675.089103","volume":"6183.67194166"},"exchange-traded":"BITSTAMP","session-id":"crypto","symbol-fullname":"BITSTAMP:BTCUSD"}}]}~m~95~m~{"m":"qsd","p":["qs_NxbX6Jfp7lFA",{"n":"BITSTAMP:BTCUSD","s":"ok","v":{"lp_time":1558466820}}]}'
};
res = io(signedText);
console.log(res);
// console.log(res.res[0].p);
// console.log(res.res[1].p);
const signedBin = {
  source: 'sokcetReqId',
  type: 'datasocket',
  opcode: 2,
  payload:'fm1+Njl+bX4IKRJBCg9xc19ka1ZHT0dKbDJHbHkSD0JJVFNUQU1QOlhSUFVTRBoCb2t1q1vNPn3owc0+hQEAAAAAjQEAAAAAmgECe30='
};
res = io(signedBin);
console.log(res);
// console.log(res.res[0].p);