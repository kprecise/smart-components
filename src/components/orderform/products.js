import React, { useEffect, useState } from "react";
import { Row, Col, Button, Form } from 'reactstrap';
import Counter from './counter'
import uuid from 'uuid'

import './styles.scss';

const Products = ({title, src, alternateCols}) => {
    const [order, setOrder] = useState([])

    useEffect(() => {
    }, [order]);

    const isOdd = (num) => { 
        return num % 2;
    }

    const isEmptyObject = (obj) => {
        for(let key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    };

    const getItem = (id, name, quantity) => {
        event.preventDefault();
        if (quantity > 0) {
            const obj = {id, name, quantity}
            const index = order.findIndex((product) => product.id === obj.id);

            if (index === -1) {
                setOrder([...order, obj])
            } else {
                const newArray = [...order];
                newArray[index] = obj;
                setOrder(newArray);
            }
        } else {
            console.log('You did not select a quantity')
        }
    }

    const displayOrder = () => {
        console.log(order)
        return (
          order.map(item => (
            <div>
                ID: {item.name}<br />
                Quantity: {item.quantity}
            </div>
          )
        )
      )
    }

    const orderExists = !isEmptyObject(order)

    const getProducts = () => {
        const result = src.map((item, index) => {
          return (
              <Form onSubmit={event => getItem(item.id, item.name, event.target.quantity.value)} id={uuid()} key={item.id}>
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

                        {orderExists &&
                          <div>
                              <h2>Your Order</h2>
                              {displayOrder()}
                          </div>
                        }
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