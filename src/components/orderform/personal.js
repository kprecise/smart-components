import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Row, Col } from 'reactstrap';
import axios from 'axios';

const PersonalInfo = ({
    title
}) => {
    return (
        <React.Fragment>
            <legend>{title}</legend>
            <FormGroup>
                <Label for="firstName">First Name</Label>
                <Input type="text" name="firstName" />
            </FormGroup>
            <FormGroup>
                <Label for="surname">Surname</Label>
                <Input type="text" name="surname" />
            </FormGroup>
        </React.Fragment>
    )
}

export default PersonalInfo;