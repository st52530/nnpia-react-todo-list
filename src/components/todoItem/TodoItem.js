import React from 'react';
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import "./TodoItem.css";

export class TodoItem extends React.Component {

    render() {
        return (
            <div className="todo-item">
                <div className="todo-item-text">{this.props.text}</div>
                <Button className="todo-item-button">Dokončit</Button>
            </div>
        );
    }
}

TodoItem.propTypes = PropTypes.shape({
    index: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
});