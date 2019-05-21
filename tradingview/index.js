'use strict';

const user = require('./user');
const watchlist = require('./watchlist');

const delay = (timeout = 1000) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

const tradingview = (page, config) => {
  if(!page || !config) throw new Error('Missing required params');
  const defaultUrl=`${config.site}/chart/${config.chart.id}/`;
  return {
    defaultUrl,
    user: Object.assign({}, user(page, delay, config.user, config.interfaces.signin,defaultUrl)),
    watchlist: Object.assign({}, watchlist(page, config.interfaces.watchlist)),
    socket:{
      listener:(params) => {
        //console.log(params);
        try{
          let obj = JSON.parse(params.response.payloadData);
          //console.log(JSON.stringify(obj,null,2));
          if(obj.text.channel==='alert'){
            let alert = JSON.parse(obj.text.content);
            //just fired alarms
            //console.log(JSON.stringify(alert));
            if(alert.m === 'event' && alert.p.snd_file==='alert/fired'){
              //is bot alert 
              let desc= alert.p.desc;
              let elements= desc.split(',');
              if(elements[0]==='bot'){
                //is the alarm ment to be bot processed?
                alert = {
                  request: {
                    id: params.requestId,
                    timestamp: params.timestamp
                  },
                  alert: alert.p
                };
                console.log(JSON.stringify(alert));
              }else{
                //other kind of alert
              }
              
            }else{
              //not parsed alert
            }
            
          }

        }catch(e){
          //not JSON or err
        }
        
      }
    }
  };

};
module.exports = tradingview;