import React, { useState, useEffect } from 'react';
import { Row, Col } from 'reactstrap';

const useCart = (theOrder) => {
  const [cartStatus, setCartStatus] = useState(false);

  const isEmptyObject = (obj) => {
    for(let key in obj) {
      if(obj.hasOwnProperty(key))
        return false;
    }
    return true;
  };

  useEffect(() => {
    if(!isEmptyObject(theOrder)) {
      setCartStatus(true);
    }
  },[]);

  return cartStatus;
}

const Cart = ({order}) => {
  const cartEmpty = () => {
    return (
      <div>Your cart is empty</div>
    )
  }

  const cartNotEmpty = (passedOrder) => {
    return (
      <div>
        <p>Your cart has <strong>{passedOrder.length}</strong> in it</p>
        { passedOrder.map(item => (
          <div key={item.id}>
            <Row>
              <Col xs="6">
                Item: {item.heading}<br/>
                Price: ${item.price}<br />
                Quantity: ${item.quantity}<br />
              </Col>
              <Col xs="6">
                <img src={item.image} />
              </Col>              
            </Row>
            <hr/>
          </div>
          )
        )}
      </div>
    )
  }

  const IsCart = useCart(order);
  return (
    <div>{IsCart ? cartNotEmpty(order): cartEmpty()}</div>
  )
}

export default Cart;