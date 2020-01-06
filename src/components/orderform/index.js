import React from "react";
import { Container, Row, Col } from 'reactstrap';
import OrderForm from './orderform';

import "./styles.scss";

const OrderFormPage = () => {
  return (
    <Container>
      <Row>
        <Col xs="12">
          <OrderForm />
        </Col>
      </Row>
    </Container>
  )
}

export default OrderFormPage;