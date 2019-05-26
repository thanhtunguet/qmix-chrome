// @flow

import 'scss/page.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import PopupPage from './components/PopupPage';

ReactDOM.render(
  <BrowserRouter>
    <PopupPage/>
  </BrowserRouter>,
  document.getElementById('root'),
);
