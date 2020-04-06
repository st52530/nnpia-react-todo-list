import React from 'react';
import PropTypes from "prop-types";

export class TodoList extends React.Component {

    render() {
        return (
            <h2>To-do list</h2>
        );
    }
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired
};