import React from "react";
import { Container, Row, Col } from 'reactstrap';
import Article from './article';

import "./styles.scss";

const ArticlePage = () => {
  return (
    <Container>
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

export default ArticlePage;