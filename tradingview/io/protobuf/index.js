'use strict';

/**
 * Compile proto for better performance
 * protocol - buffers tv.proto - o compiled.js 
 * and dont edit it wrap it if needed
 * 
 * @author Rolando Lucio < https://github.com/rolandolucio >
 * @todo make a err validating wrapper api | handler in case changing lib dependency
 */
//https://github.com/mafintosh/protocol-buffers
// forked https://github.com/rolandolucio/protocol-buffers
const protobuf = require('protocol-buffers');
const fs = require('fs');

/**
 *
 *
 * @class ProtoBuf
 */
class ProtoBuf {
  /**
   *Creates an instance of ProtoBuf.
   * @param {*} [{compiled=true}={}]
   * @memberof ProtoBuf
   */
  constructor({compiled=true}={}){
    this.messages = compiled ? require('./compiled') : protobuf(fs.readFileSync(__dirname+'/tv.proto'));
    // Messages we have added o discovered so far to the protobuf
    this.msgsList= [
      { cmd:41,m:'qsd'}
    ];
  }
  /**
   *
   *
   * @param {*} msg
   * @param {*} obj
   * @returns
   * @memberof ProtoBuf
   */
  encode(msg,obj) {
    const buff = this.messages[msg].encode(obj);
    return buff;
  }
  /**
   *
   *
   * @param {*} msg
   * @param {*} buff
   * @returns
   * @memberof ProtoBuf
   */
  decode(msg, buff) {
    /*
    get root element to fetch command and re-parsed instanceof
    pretty sure this can be done in a protobuf way
    have it defined in our commands list?
    {
      command_number: 41,
      data: < buff >
    }*/
    if( msg === 'Msg') {
      const obj = this.messages[msg].decode(buff);
      const found = this.msgsList.find((e)=>{
        return e.cmd === obj.command_number;
      });
      if( found === undefined){
        return { m: '__tv_proto_notinlist', p: { cmd:obj.command_number } };
      }
      return { m:found.m, p:this.decode(found.m,obj.data)};
    }else{
      return this.messages[msg].decode(buff);
    }
  }
  
}



module.exports = ProtoBuf;


/**
 * @example
///////////////
BY APi/wrap
let objProto = pb.decode('Msg', buf);
console.log(objProto) // should pr
console.log(pb.encode('Msg', objProto));
///////////////
//Using direct acces to message
//unsigned is a valid bindecoded buffer
const protobuf = require('./tradingview/protobuf');
buf = unsigned[0]
console.log(buf)
const pb = new protobuf()
let objProto = pb.messages.Msg.decode(buf);
console.log(objProto) // should pr
let data = objProto.data
//console.log(data.toString('utf8'))
let dataDecode = pb.messages.qsd.decode(data)
console.log(dataDecode) // should pr

< Buffer 7 e 6 d 7 e 36 39 7 e 6 d 7 e 08 29 12 41 0 a 0 f 71 73 5 f 64 6 b 56 47 4 f 47 4 a 6 c 32 47 6 c 79 12 0 f 42 49 54 53 54 41 4 d 50 3 a 58 52 50 55 53 44 1 a 02 6 f 6 b... > [ <
    Buffer 08 29 12 41 0 a 0 f 71 73 5 f 64 6 b 56 47 4 f 47 4 a 6 c 32 47 6 c 79 12 0 f 42 49 54 53 54 41 4 d 50 3 a 58 52 50 55 53 44 1 a 02 6 f 6 b 75 ab 5 b cd 3 e 7 d e8 c1... >
  ] <
  Buffer 08 29 12 41 0 a 0 f 71 73 5 f 64 6 b 56 47 4 f 47 4 a 6 c 32 47 6 c 79 12 0 f 42 49 54 53 54 41 4 d 50 3 a 58 52 50 55 53 44 1 a 02 6 f 6 b 75 ab 5 b cd 3 e 7 d e8 c1... > {
    command_number: 41,
    data:
      <
      Buffer 0 a 0 f 71 73 5 f 64 6 b 56 47 4 f 47 4 a 6 c 32 47 6 c 79 12 0 f 42 49 54 53 54 41 4 d 50 3 a 58 52 50 55 53 44 1 a 02 6 f 6 b 75 ab 5 b cd 3 e 7 d e8 c1 cd 3 e 85 01... >
  } {
    session: 'qs_dkVGOGJl2Gly',
    symbol_name: 'BITSTAMP:XRPUSD',
    status: 'ok',
    values: '',
    lp: 0,
    ch: 0,
    chp: 0,
    high_price: 0,
    low_price: 0,
    volume: 0,
    rtc: 0,
    rch: 0,
    rchp: 0,
    bid: 0.40108999609947205,
    ask: 0.4018700122833252,
    bid_size: 0,
    ask_size: 0,
    rest: '{}'
  }

*/