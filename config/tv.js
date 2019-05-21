'use strict';
/**  
 * Trading View Configuration Variables
 */

module.exports = {
  site: process.env.APP_TV_SITE,
  user: {
    username: process.env.APP_TV_USER_EMAIL,
    password: process.env.APP_TV_USER_PASS
  },
  chart: {
    id: process.env.APP_TV_CHART_ID,
    name: process.env.APP_TV_CHART_NAME
  },
  interfaces: {
    signin: {
      url: '#signin',
      selectors: {
        form:{
          username: 'input[name = username ]',
          password: 'input[name = password ]',
          submit: '#signin-form > div.tv-signin-dialog__footer.tv-signin-dialog__footer--login > div.tv-signin-dialog__footer-item.tv-signin-dialog__footer-item--login > button'
        }
      }
    },
    watchlist: {
      selectors: {
        active: 'body > div.js-rootresizer__contents > div.layout__area--right > div > div.widgetbar-pages > div.widgetbar-pagescontent > div.widgetbar-page.active > div.widgetbar-widget.widgetbar-widget-watchlist > div.widgetbar-widgetbody',
        button: 'body > div.js-rootresizer__contents > div.layout__area--right > div > div.widgetbar-tabs > div > div > div > div > div:nth-child(1)'
      }
    }
  }
};