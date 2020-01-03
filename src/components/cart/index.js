import React, { useState, useEffect } from 'react';
import { DATAFORMAT } from '../article/constants';
import axios from 'axios';


const useCart = (theOrder) => {
  console.log('received >>>', theOrder)
  const isEmptyObject = (obj) => {
    for(let key in obj) {
      if(obj.hasOwnProperty(key))
        return false;
    }
    return true;
  };

  const [currentOrder, setcurrentOrder] = useState([]);
  const [cartStatus, setCartStatus] = useState(false);

  useEffect(() => {
    if(!isEmptyObject(theOrder)) {
      setcurrentOrder(theOrder)
      setCartStatus(true)
      console.log('entered')
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
    console.log('called')
    return <div>Your cart has items in it</div>
  }


  console.log('order >>>>>>>', order)
  const IsCart = useCart(order)
  return (
    <div>Cart Status: {IsCart ? cartNotEmpty(): cartEmpty()}</div>
  )
}

export default Cart;