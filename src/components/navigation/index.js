import React from "react";
import { Container, Row, Col } from 'reactstrap';
import Navigation from './navigation';
import { navigationLinks } from '../../data.js';

import "./styles.scss";

const NavigationPage = () => {
  return (
    <Container>
      <Row>
        <Col xs="12">
          <h2>Navigation</h2>
          <Navigation
            links={navigationLinks}
            tabs={false}
            pills={true}
            vertical={false}
            justified={false}
            />
        </Col>
      </Row>
    </Container>
  )
}

export default NavigationPage;