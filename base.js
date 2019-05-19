const puppeteer = require('puppeteer');

/**
 * setTimeout as a promise
 *
 * @param {number} [time=1000]
 * @returns
 */
const delay = (time = 1000) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};
const sequence = async (page, site, value, wait) => {
  const response = await page.goto(site, { waitUntil: 'domcontentloaded' });
  await page.click(' #n_CI');
  await page.type('input[name = telefono ]', value);
  await page.click(' input[type="button"][name="s_button"]');
  await delay(wait);
  const content = await page.content();
  return { response, content };
};
/**
 * Scrap in full sequence with 
 * puppeteer api usage as base example
 *
 * @param {*} { ... }
 * @param {string} [site='http://example.com']
 * @param {number} [value=20000000]
 * @param {number} [wait=3000]
 * @param {boolean} [capture=false]
 * @param {string} [captures='./log/captures']
 * @returns 
 */
const scrap = async ({ site = 'http://example.com', value = 20000000, wait = 3000, capture = false, captures = './log/captures' }) => {
  const browser = await puppeteer.launch(); //{executablePath: '/path/to/Chrome'}
  let reply = {};
  try {
    value = value.toString();
    const page = await browser.newPage();
    const { response, content } = await sequence(page, site, value, wait);
    if (capture) await page.screenshot({ path: `${captures}/${value}.png` });
    //await browser.close();
    reply = { status: response.status(), content };
  } catch (error) {
    //throw { status: 999, error };
    //soft failing
    reply = { status: 999, error };
  } finally {
    await browser.close();
    return reply;
  }
};
