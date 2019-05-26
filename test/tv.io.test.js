const io = require('./../tradingview/io');
/**  
* Test That reader preparse properly
*/
test('io.reader Signed Text', () => {
  const input = {
    source: 'sokcetReqId',
    type: 'datasocket',
    opcode: 1,
    payload: '~m~1437~m~{"m":"qsd","p":["qs_NxbX6Jfp7lFA",{"n":"BITSTAMP:BTCUSD","s":"ok","v":{"session-extended":"24x7","total_value_traded":25235628483.283599854,"total_shares_diluted":21000000,"has-intraday":true,"total_shares_outstanding":17713925,"rt-update-time":"1558466674","adjustment":"none","symbol":"BTCUSD","minmovement":1,"has-dwm":true,"fundamental_data":true,"is-tradable":true,"timezone":"Etc/UTC","minute-bar":{"close":"8010.6300000000","high":"8014.3300000000","low":"8001.3500000000","open":"8010.0800000000","time":"1558466640","update-time":"1558466675.089102","volume":"0.53573092"},"all_time_low":2.2200000000000001954,"history-tag":"","prefix":"BITSTAMP","rt-lag":"1.089102","has-depth":true,"pro-perm":"","minmovement2":0,"exchange-listed":"BITSTAMP","has-no-volume":false,"allowed-adjustment":"none","trade":{"price":"8010.6300000000","size":"0.0356979200","time":"1558466674"},"symbol-proname":"BITSTAMP:BTCUSD","session-regular":"24x7","has-adjustment":false,"group":"bitstamp","intraday-multipliers":"1","feed":"bitstamp","short-description":"Bitcoin / Dollar","exchange-listed-symbol":"BTCUSD","series-key":"BITSTAMP:BTCUSD","all_time_high":19666,"daily-bar":{"close":"8010.6300000000","high":"8069.3400000000","low":"7676.2700000000","open":"8007.6700000000","time":"1558396800","update-time":"1558466675.089103","volume":"6183.67194166"},"exchange-traded":"BITSTAMP","session-id":"crypto","symbol-fullname":"BITSTAMP:BTCUSD"}}]}~m~95~m~{"m":"qsd","p":["qs_NxbX6Jfp7lFA",{"n":"BITSTAMP:BTCUSD","s":"ok","v":{"lp_time":1558466820}}]}'
  };
  const res = io.reader(input);
  expect(JSON.stringify(res))
    .toBe(
      '{"code":200,"way":"undefined","source":"sokcetReqId","type":"text","res":[{"m":"qsd","p":["qs_NxbX6Jfp7lFA",{"n":"BITSTAMP:BTCUSD","s":"ok","v":{"session-extended":"24x7","total_value_traded":25235628483.2836,"total_shares_diluted":21000000,"has-intraday":true,"total_shares_outstanding":17713925,"rt-update-time":"1558466674","adjustment":"none","symbol":"BTCUSD","minmovement":1,"has-dwm":true,"fundamental_data":true,"is-tradable":true,"timezone":"Etc/UTC","minute-bar":{"close":"8010.6300000000","high":"8014.3300000000","low":"8001.3500000000","open":"8010.0800000000","time":"1558466640","update-time":"1558466675.089102","volume":"0.53573092"},"all_time_low":2.22,"history-tag":"","prefix":"BITSTAMP","rt-lag":"1.089102","has-depth":true,"pro-perm":"","minmovement2":0,"exchange-listed":"BITSTAMP","has-no-volume":false,"allowed-adjustment":"none","trade":{"price":"8010.6300000000","size":"0.0356979200","time":"1558466674"},"symbol-proname":"BITSTAMP:BTCUSD","session-regular":"24x7","has-adjustment":false,"group":"bitstamp","intraday-multipliers":"1","feed":"bitstamp","short-description":"Bitcoin / Dollar","exchange-listed-symbol":"BTCUSD","series-key":"BITSTAMP:BTCUSD","all_time_high":19666,"daily-bar":{"close":"8010.6300000000","high":"8069.3400000000","low":"7676.2700000000","open":"8007.6700000000","time":"1558396800","update-time":"1558466675.089103","volume":"6183.67194166"},"exchange-traded":"BITSTAMP","session-id":"crypto","symbol-fullname":"BITSTAMP:BTCUSD"}}]},{"m":"qsd","p":["qs_NxbX6Jfp7lFA",{"n":"BITSTAMP:BTCUSD","s":"ok","v":{"lp_time":1558466820}}]}]}'
      );
});
test('io.reader Signed ProtoBuf', () => {
  const input = {
    source: 'sokcetReqId',
    type: 'datasocket',
    opcode: 2,
    payload: 'fm1+Njl+bX4IKRJBCg9xc19ka1ZHT0dKbDJHbHkSD0JJVFNUQU1QOlhSUFVTRBoCb2t1q1vNPn3owc0+hQEAAAAAjQEAAAAAmgECe30='
  };
  const res = io.reader(input);
  expect(JSON.stringify(res))
    .toBe(
      '{"code":200,"way":"undefined","source":"sokcetReqId","type":"proto","res":[{"m":"qsd","p":{"session":"qs_dkVGOGJl2Gly","symbol_name":"BITSTAMP:XRPUSD","status":"ok","values":"","lp":0,"ch":0,"chp":0,"high_price":0,"low_price":0,"volume":0,"rtc":0,"rch":0,"rchp":0,"bid":0.40108999609947205,"ask":0.4018700122833252,"bid_size":0,"ask_size":0,"rest":"{}"}}]}'
    );
});
test('io.reader json', () => {
  const input = {
    source: 'sokcetReqId',
    type: 'pushstream',
    opcode: 1,
    payload: '{"id": 28,"channel": "private_VTXqAgzwgHkj1UShzEJM07mKyWWyQKwsoLcg95JXRfU","text":"","channel": "alert"}'
  };
  const res = io.reader(input);
  expect(JSON.stringify(res))
    .toBe(
      '{"code":200,"way":"undefined","source":"sokcetReqId","type":"json","res":[{"id":28,"channel":"alert","text":""}]}'
    );
});