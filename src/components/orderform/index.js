import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Row, Col } from 'reactstrap';
import axios from 'axios';
import data from './data.json'
import Products from './products'
import PersonalInfo from './personal'
import './styles.scss';

const OrderForm = () => {
  const submitForm = event => {
    event.preventDefault()
  }
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