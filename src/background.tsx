import React from 'react';
import ReactDOM from 'react-dom';
import Help from 'src/components/Help';
import 'src/scss/options.scss';

function BackgroundPage() {
  return <Help />;
}

ReactDOM.render(<BackgroundPage />, document.getElementById('root'));
