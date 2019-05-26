// @flow

import React from 'react';
import LocaleProvider from 'antd/lib/locale-provider';
import enUS from 'antd/lib/locale-provider/en_US';
import {Container} from 'reactstrap';

function PopupPage() {
  return (
    <LocaleProvider locale={enUS}>
      <div style={{
        width: '400px',
      }}>
        <Container fluid>
          <h2>
            English Dictionaries
          </h2>
        </Container>
      </div>
    </LocaleProvider>
  );
}

export default PopupPage;
