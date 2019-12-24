import React, { useState } from "react";
import { Button, FormGroup, Input } from 'reactstrap'

const Counter = () => {

    const [counter, setCounter] = useState(0)

    const incrementCounter = () => {
        return setCounter(counter + 1)
    }

    const decrementCounter = () => {
        if (counter <= 0) {
            noMinusCounter()
        } else {
            return setCounter(counter -1)
        }
        return false
    }

    const noMinusCounter = () => {
        return setCounter(0)
    }
    return (
        <React.Fragment>
            <FormGroup>
                <Button color="primary" onClick={() => incrementCounter()}>+</Button>
                <Input type="text" name="quantity" value={counter} readOnly />
                <Button color="primary" onClick={() => decrementCounter()}>-</Button>
          </FormGroup> 
        </React.Fragment>
    )
}

export default Counter;