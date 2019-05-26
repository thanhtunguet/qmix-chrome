// @flow

import 'bootstrap/dist/css/bootstrap.min.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '@coreui/icons/css/coreui-icons.min.css';
import 'antd/dist/antd.min.css';
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
