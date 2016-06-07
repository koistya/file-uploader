/**
 * ASP.NET Core Starter Kit
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

const path = require('path');
const cpy = require('cpy');
const task = require('./lib/task');
const cwd = path.resolve(__dirname, '../');

module.exports = task('copy', () => Promise.resolve()
  .then(() => cpy(['public/**/*.*'], 'build', { cwd, parents: true }))
);
