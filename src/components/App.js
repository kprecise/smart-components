import React from "react";
import { Container, Row, Col } from 'reactstrap';
import Nav from './nav';
import { links } from '../data.js'
import Article from './article';
import "./index.css";

const App = () => {
  return (
      <Container>
        <Row>
          <Col xs="12">
            <h1>Smart Components</h1>
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
              srcType="API"
              dataSrc="https://restcountries.eu/rest/v2/all"
            />
          </Col>
        </Row>
      </Container>
  )
}
 
export default App;