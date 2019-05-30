'use strict';

const makeWatchlist = (page, interfaces) => {
  const selectors = interfaces.selectors;
  // ToDo; eval objects
  return {
    open: async (timeout = 5000) => {
      try {
        await page.waitForSelector(selectors.active, { timeout });
        console.log('=====================Active watchlist=====================');
      } catch (error) {
        //console.log(selectors);
        console.log('=====================Inactive watchlist=====================');
        await page.click(selectors.button);
      }
    }
  };
};
module.exports = makeWatchlist;