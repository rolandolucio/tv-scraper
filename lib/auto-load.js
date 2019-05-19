'use strict';
/** 
 @licstart The following is the entire license notice for the code in this file.

MIT License

Copyright(c) 2019 Rolando Lucio

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files(the "Software"), to deal in the Software without restriction,
including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and / or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

@licend The above is the entire license notice for the code in this page.
*/
/**
 * @author Rolando Lucio < rolandolucio @gmail.com >
 * @version 0.1.0
 */
/**
 * @desc 
 * Helps as a lazy load of all modules in a directory as subdirs
 * At the end having an object in the form:
 *   My.config.folder.filename.object
 * 
* @example
const al = require('./lib/auto-load');
let config = al(__dirname + '/config');

Or 

const config = require('./lib/auto-load')(__dirname + '/config');

├── ...
├── config                    
│   ├── db
│       ├── subFolder
|       credentials.js
|       hosts.js
|       ...
│   ├── global.js
│   └── ...                

Resulting Object: that could be used as config.db.hosts.[...] 

{
  db:{
    subFolder: { ... },
    credentials: { ... }
    hosts: { ... } 
  },
  global: {...},
  ...
}
*/
const fs = require("fs");
const path = require("path");
/**
 * Recursively require from folder all modules files to an object
 * using the filename as object key
 *
 * @param {*} dirPath, (__dirname + '/folder')
 * @returns
 */

const load = (dirPath) => {
  let files = fs.readdirSync(dirPath);
  let lvlItems = [];
  return files.reduce((objs, element) => {

    let obj = {};
    let fullpath = path.join(dirPath, element);
    let ext = path.extname(element);
    let name = path.basename(element, ext);
    let stat = fs.statSync(fullpath);

    if(stat.isDirectory()) {
      let npath = `${dirPath}/${name}`;
      obj = {
        [name]: load(npath)
      };
      lvlItems.push(name);
    } else if(stat.isFile()) {
      if(ext === '.js' && name != 'index') {
        let mod = require(path.join(dirPath, element));
        if(lvlItems.indexOf(name) >= 0) {
          // a directory with same name all ready added
          name = name + '_f';
          console.warn('file renamed, dir already exists', dirPath + name);
        }
        obj = {
          [name]: mod
        };
        lvlItems.push(name);
      } else {
        // NO JS files or index
        // add __ to avoid overrride 
        obj = {
          [name + '__']: undefined
        };
      }
    } else {
      //Exceptions and perms errs
      obj = {
        [name + '__']: undefined
      };
    }
    Object.assign(objs, obj);
    return objs;
  }, {});
};

module.exports = load;