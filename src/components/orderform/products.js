import React, { useEffect, useState } from "react";
import { Row, Col, Button, Form } from 'reactstrap';
import Counter from './counter'
// import AddToCart from './addToCart'
import uuid from 'uuid'

import './styles.scss';

const Products = ({title, src, alternateCols}) => {
    const isOdd = (num) => { 
        return num % 2;
    }
    const addItem = (id, name, e) => {
        console.log('func', id, name, e)
    }
    const getItem = event => {
        event.preventDefault()
        console.log('product name', event.target.productName.value)
        console.log('quantity', event.target.quantity.value)
    }
    const getProducts = () => {
        const result = src.map((item, index) => {
          return (
              <Form onSubmit={getItem} id={uuid()}>
            <div className="productInfo" key={item.id}>
              <p className="productName">Product Name: {item.name}</p>
              <input type="hidden" name="productName" value={item.name} />
              <div className="productDecription">
                <Row>
                  <Col xs={6}>
                  { alternateCols ? 
                    isOdd(index) ? <p>{item.description}</p> : <img className="productImage" src={item.image} /> 
                    : <p>{item.description}</p>
                  }
                  </Col>
                  <Col xs={6}>
                  { alternateCols ? 
                    isOdd(index) ? <img className="productImage" src={item.image} /> : <p>{item.description}</p>
                    : <img className="productImage" src={item.image} />
                  }
                    </Col>                  
                </Row>
                <Counter />
                <Button color="secondary">Add To Cart</Button>
                {/* <AddToCart 
                    item={}
                /> */}
              </div>
            </div> 
              </Form>

          )
        })
        return (
          <React.Fragment>
            <legend>{title}</legend>
            {result}
          </React.Fragment>
        )
    }
    return (
        getProducts()
    )
}

export default Products;