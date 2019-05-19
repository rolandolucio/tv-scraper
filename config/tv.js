'use strict';
/**  
 * Trading View Configuration Variables
*/

module.exports = {
  site: process.env.APP_TV_SITE,
  user:{
    email: process.env.APP_TV_USER_EMAIL,
    pass: process.env.APP_TV_USER_PASS
  },
  chart:{
    id: process.env.APP_TV_CHART_ID,
    name: process.env.APP_TV_CHART_NAME
  }
};