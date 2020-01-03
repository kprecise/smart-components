import React, { useState, useEffect } from 'react';
import { DATAFORMAT } from '../article/constants';
import axios from 'axios';


const useCart = (theOrder) => {
  const isEmptyObject = (obj) => {
    for(let key in obj) {
      if(obj.hasOwnProperty(key))
        return false;
    }
    return true;
  };

  const [currentOrder, setCurrentOrder] = useState([]);
  const [cartStatus, setCartStatus] = useState(false);

  useEffect(() => {
    if(!isEmptyObject(theOrder)) {
      setCurrentOrder(theOrder)
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

  const cartNotEmpty = () => {
    return <div>Your cart has items in it</div>
  }

  const IsCart = useCart(order)
  return (
    <div>Cart Status: {IsCart ? cartNotEmpty(): cartEmpty()}</div>
  )
}

export default Cart;