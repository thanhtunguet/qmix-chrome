import * as React from 'react';
import {render} from 'react-dom';
import {HashRouter} from 'react-router-dom';
import './scss/options.scss';

function OptionPage() {
  return (
    <HashRouter>
      <div className="app">
        <header className="app-header"/>
        <div className="app-body">
          <div className="app-sidebar"/>
          <main className="main py-2"/>
        </div>
      </div>
    </HashRouter>
  );
}

render(
  <OptionPage/>,
  document.getElementById('root'),
);
