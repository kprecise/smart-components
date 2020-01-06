import React from "react";
import { Container, Row, Col } from 'reactstrap';
import Carousel from './carousel';
import { carouselData, carouselSettings } from '../../data.js';

import "./index.scss";

const App = () => {
  return (
    <Container>
      <Row>
        <Col xs="12">
          <Carousel
            data={carouselData}
            settings={carouselSettings}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default App;