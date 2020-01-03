import React, { useState, useEffect } from 'react';

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
      setCartStatus(true)
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
        <p>Your cart has items in it</p>
        { passedOrder.map(item => (
          <div key={item.id}>
            Item: {item.heading}<br/>
            Description: {item.content}<br />
            <img src={item.image} />
          </div>
          )
        )}
      </div>
    )
  }

  const IsCart = useCart(order)
  return (
    <div>Cart Status: {IsCart ? cartNotEmpty(order): cartEmpty()}</div>
  )
}

export default Cart;