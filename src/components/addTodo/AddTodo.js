import React from 'react';
import Button from "react-bootstrap/Button";
import FormText from "react-bootstrap/FormText";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

export class AddTodo extends React.Component {

    render() {
        return (
            <Form>
                <FormControl type="text"  />
                <Button type="submit">Přidat to-do.</Button>
            </Form>
        );
    }
}