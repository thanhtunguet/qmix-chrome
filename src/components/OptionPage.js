// @flow

import React from 'react';
import LocaleProvider from 'antd/lib/locale-provider';
import enUS from 'antd/lib/locale-provider/en_US';
import {Col, Container, Row} from 'reactstrap';

export function OptionPage() {
  return (
    <LocaleProvider locale={enUS}>
      <Container fluid>
        <Row>
          <Col>
            <span className="h3">
              English Dictionaries
            </span>
          </Col>
        </Row>
      </Container>
    </LocaleProvider>
  );
}
