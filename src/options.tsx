import React from 'react';
import {render} from 'react-dom';
import {HashRouter} from 'react-router-dom';
import 'src/scss/options.scss';

function OptionPage() {
  return <HashRouter />;
}

render(<OptionPage />, document.getElementById('root'));
