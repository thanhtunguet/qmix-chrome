// @flow

import React from 'react';
import LocaleProvider from 'antd/lib/locale-provider';
import enUS from 'antd/lib/locale-provider/en_US';

function OptionPage() {
  return (
    <LocaleProvider locale={enUS}>
      <div>
        <h2>
          English Dictionaries
        </h2>
      </div>
    </LocaleProvider>
  );
}

export default OptionPage;
