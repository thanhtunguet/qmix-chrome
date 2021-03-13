// options page

import 'src/scss/options.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import ExtensionForm from './components/ExtensionForm/ExtensionForm';

ReactDOM.render(
  <HashRouter>
    <ExtensionForm />
  </HashRouter>,
  document.getElementById('root'),
);
