// @flow

import 'scss/page.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import OptionPage from './components/OptionPage';

ReactDOM.render(
  <BrowserRouter>
    <OptionPage/>
  </BrowserRouter>,
  document.getElementById('root'),
);
