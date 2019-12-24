import React, { useEffect, useState } from "react";
import { Button, FormGroup, Input } from 'reactstrap'

const AddToCart = ({item}) => {

    return (
        <Button color="secondary" onClick={addItem(item)}>Add To Cart</Button>
    )
}

export default AddToCart;