import React from "react";
import { Button } from 'reactstrap'
import data from './data.json'
import Products from './products'
import PersonalInfo from './personal'
import './styles.scss';

const OrderForm = () => {
  return (
    <div className="orderForm">
      <h2>Order Form</h2>
      <PersonalInfo 
        title="Personal Information"
      />
      <Products 
        title="Products"
        src={data}
        alternateCols={true}
      />          
      <Button color="primary">Submit</Button>
    </div>
  )
}

export default OrderForm;