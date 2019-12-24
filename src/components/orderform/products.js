import React, { useState } from "react";
import { Row, Col, Button, Form } from 'reactstrap';
import Counter from './counter'
import uuid from 'uuid'

import './styles.scss';

const Products = ({title, src, alternateCols}) => {

    const [order, setOrder] = useState([]) 
    const isEmptyObject = (obj) => {
        for(let key in obj) {
          if(obj.hasOwnProperty(key))
            return false;
        }
        return true;
      };

    const isOdd = (num) => { 
        return num % 2;
    }

    const getItem = event => {
        event.preventDefault()
            const itemOrder = [
                {id: event.target.productId.value, name: event.target.productName.value, quantity: event.target.quantity.value}
            ]
            setOrder(itemOrder)
            console.log('order >>>>>>', order)

    }
    const getProducts = () => {
        const result = src.map((item, index) => {
          return (
              <Form onSubmit={getItem} id={uuid()} key={item.id}>
                <div className="productInfo">
                    <input type="hidden" name="productId" value={item.id} />
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