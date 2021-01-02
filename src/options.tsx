import React from 'react';
import ReactDOM from 'react-dom';
import Help from 'src/components/Help';
import 'src/scss/options.scss';

function OptionPage() {
  return <Help />;
}

ReactDOM.render(<OptionPage />, document.getElementById('root'));
