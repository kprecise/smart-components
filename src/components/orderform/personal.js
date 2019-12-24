import React from "react";
import { FormGroup, Label, Input } from 'reactstrap';

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