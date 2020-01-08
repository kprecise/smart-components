import React from "react";
import { Container, Row, Col } from 'reactstrap';
import Cart from './cart';
import { shoppingBasket } from '../../data.js';

const CartPage = () => {
  return (
    <Container>
      <Row>
        <Col xs="12">
          <h2>Cart</h2> 
          <Cart order={shoppingBasket} />
        </Col>
      </Row>
    </Container>
  )
}
    
export default CartPage;