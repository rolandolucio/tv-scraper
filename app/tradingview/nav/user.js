const makeUser = (page, delay, user, interfaces, defaultUrl) => {
  //console.log(interfaces)
  const { form } = interfaces.selectors;
  const { username, password } = user;
  const signInUrl = defaultUrl + interfaces.url;
  return {
    username,
    signInUrl,
    signIn: async ({ email, pass, path } = {}, timeout = 5000) => {
      // TODO; email pass path not from private logic
      email = email || username;
      pass = pass || password;
      path = path || signInUrl;
      try {
        await page.goto(path, { waitUntil: 'domcontentloaded' });
        await delay(timeout);
        await page.type(form.username, email);
        await page.type(form.password, pass);
        await page.click(form.submit);
        console.log(" === === === === === === === Signed IN=== === === === === === === ")
        await delay(timeout);        
      } catch (e) {
        console.log('===========Login error========== \n', e);
      }
    }
  };
};

module.exports = makeUser;