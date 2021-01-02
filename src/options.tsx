import Typography from 'antd/lib/typography';
import React from 'react';
import {render} from 'react-dom';
import {HashRouter} from 'react-router-dom';
import 'src/scss/options.scss';

function OptionPage() {
  return (
    <HashRouter>
      <div className="container d-flex flex-column justify-content-center align-content-center align-items-center">
        <Typography.Title>English Dictionaries</Typography.Title>
        You need support? Send us an email to
        <a href="mailto:<ht@thanhtunguet.info>"> ht@thanhtunguet.info </a>
      </div>
    </HashRouter>
  );
}

render(<OptionPage />, document.getElementById('root'));
