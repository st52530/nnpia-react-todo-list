import React from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import "./AddTodo.css";

export class AddTodo extends React.Component {

    buttonClicked() {
        alert("xxx")
    }

    render() {
        return (
            <Form>
                <h2>Přidání nového To-do</h2>
                <InputGroup>
                    <FormControl type="text" placeholder="To-do text" />
                    <Button className="add-button" type="submit" onClick={this.buttonClicked}>Přidat To-do</Button>
                </InputGroup>
            </Form>
        );
    }
}