/**
 * Copyright © 2016 Konstantin Tarkus <hello@tarkus.me>
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import 'babel-polyfill';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { FileUploader } from './components';

const container = document.getElementById('container');
ReactDOM.render(<FileUploader />, container);
