import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import axios from 'axios';
// import './styles.scss';

const OrderForm = () => {

  const submitForm = event => {
    event.preventDefault()
  }

  return (
    <Form onSubmit={submitForm}>
      <FormGroup>
        <Label for="firstName">First Name</Label>
        <Input type="text" name="firstName" />
      </FormGroup>
      <FormGroup>
        <Label for="surname">Surname</Label>
        <Input type="text" name="surname" />
      </FormGroup>
      <Button color="primary">Submit</Button>
    </Form>
  )
}

export default OrderForm;