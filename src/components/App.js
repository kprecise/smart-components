import React from "react";
import { Container, Row, Col } from 'reactstrap';
import Header from './header';
import Nav from './nav';
import Article from './article';
import { links } from '../data.js';
import { JSONData } from '../data.js'
import "./index.css";

const App = () => {
  return (
      <Container>
        <Row>
          <Col xs="12">
            <Header
              backgroundImage="https://www.blackhillsbadlands.com/sites/default/files/styles/bhb40_page_hero/public/photos/events/5th-annual-holiday-bazaar/abstract-background-blur-255377.jpg"
              logo="https://carlisletheacarlisletheatre.org/images/football-logo-7.png"
              text="This is the heading"
            />
          </Col>
        </Row>
          <Row>
              <Col xs="12">
                  <h2>Navigation</h2>
                  <Nav links={links} />
              </Col>
          </Row>
        <Row>
          <Col xs="12">
            <h2>Article</h2>
            <Article
              // srcType="JSON"
              // dataSrc={JSONData}
              srcType="API"
              dataSrc="https://restcountries.eu/rest/v2/all"
            />
          </Col>
        </Row>
      </Container>
  )
}
 
export default App;