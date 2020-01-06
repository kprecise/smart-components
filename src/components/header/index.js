import React from "react";
import { Container, Row, Col } from 'reactstrap';
import Header from './header';

import './styles.scss';

const HeaderPage = () => {
  return (
    <Container>
      <Row>
        <Col xs="12">
          <Header
            mainImg="https://www.blackhillsbadlands.com/sites/default/files/styles/bhb40_page_hero/public/photos/events/5th-annual-holiday-bazaar/abstract-background-blur-255377.jpg"
            logo="https://carlisletheacarlisletheatre.org/images/football-logo-7.png"
            text="This is the heading"
          />
        </Col>
      </Row>
    </Container>
  )
}

export default HeaderPage;