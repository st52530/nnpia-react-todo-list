import React from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import PropTypes from "prop-types";
import "./AddTodo.css";

export class AddTodo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ""
        };
    }

    onTodoClicked = (e) => {
        e.preventDefault();
       this.props.handleClick(this.state.text);
       this.setState({
           text: ""
       });
    };

    render() {
        return (
            <Form>
                <h2>Přidání nového To-do</h2>
                <InputGroup>
                    <FormControl type="text" placeholder="To-do text"
                                 onChange={(event => this.setState({text: event.target.value}))} value={this.state.text}/>
                    <Button className="add-button" type="submit" onClick={this.onTodoClicked.bind(this)}>Přidat To-do</Button>
                </InputGroup>
            </Form>
        );
    }
}

AddTodo.propTypes = {
    handleClick: PropTypes.func.isRequired
};