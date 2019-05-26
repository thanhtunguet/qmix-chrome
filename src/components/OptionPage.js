// @flow

import React from 'react';
import LocaleProvider from 'antd/lib/locale-provider';
import enUS from 'antd/lib/locale-provider/en_US';
import Container from 'reactstrap/lib/Container';

function OptionPage() {
  return (
    <LocaleProvider locale={enUS}>
      <Container fluid>
        <h2>
          English Dictionaries
        </h2>
      </Container>
    </LocaleProvider>
  );
}

export default OptionPage;
