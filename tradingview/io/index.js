'use strict';
/** 
 * 
 */
/*
{
original socket response:
type: datasocket || pushstream
 response:{
   opcode: 1 || 2 , // 1 => text, 2 => binary
   mask: true,
   payloadData: 
   // opcode 1 , txt encoded  , wss data or prodata
   '~m~55~m~{"m":"chart_create_session","p":["cs_xkd21F2c6xIU",""]}' ||
   // opcode 2   bas64 bin encoded Buffer , wss data or prodata
   'fm1+Njl+bX4IKRJBCg9xc19ka1ZHT0dKbDJHbHkSD0JJVFNUQU1QOlhSUFVTRBoCb2t1q1vNPn3owc0+hQEAAAAAjQEAAAAAmgECe30=' ||
   // JSON opcode 1, pushstream private_XXX or public
   {
     "id": 28,
     "channel": "private_VTXqAgzwgHkj1UShzEJM07mKyWWyQKwsoLcg95JXRfU",
     "text": {
       "content": "{String JSON}",
       "channel": "alert"
     }
   }
 }
}
*/
const protobuf = require('./protobuf');
const codec = require('./codec');

const io = ({
  source = '00000',
  type,
  opcode,
  payload,
  way = 'input',
},config= {
  codec: {},
  proto : { compiled: true }
}) => {
  let code = 200;
  let res = [];
  switch (true) {
  case type === 'pushstream' && opcode === 1:
    // JSON file
    type = 'json';
    try {
      const jobj = JSON.parse(payload);
      res.push(jobj);
    } catch (e) {
      code = 500;
      console.error(`unknow pushtream input \n`, payload);
      console.error(e);
    }
    break;
  case type === 'datasocket' && opcode === 1:
    // txt signed
    type = 'text';
    try {
      const c = new codec(config.codec);
      const resTxt = c._decode(payload);
      
      res= resTxt.map(e => {
        try{
          //console.log(e)
          return JSON.parse(e);
        }catch(err){
          console.warn('signed text element is not a json \n', e);
          return { m: '__tv_notjson', obj: e }; // __tv_notjson for catching later 
        }
      });
    } catch (err) {
      code = 500;
      console.error(`unknow txt signed input \n`, payload);
      console.error(err);
    }
    break;
  case type === 'datasocket' && opcode === 2:
    // bin signed
    type='proto';
    try {
      const pb = new protobuf(config.proto);
      const cx = new codec(config.codec);
      const buff = Buffer.from(payload, 'base64');
      const unsignedBuff = cx._binDecode(buff);
      res= unsignedBuff.map(e => {
        return pb.decode('Msg', e);
      });
    } catch (err) {
      code = 500;
      console.error(`unknow protobuff input \n`, payload);
      console.error(err);
    }
    break;
  default:
    code = 404;
    console.error(`unknow input \n`, payload);
    break;
  }
  return { code,way, source,type, res };
};

module.exports = io;