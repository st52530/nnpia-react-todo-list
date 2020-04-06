import React from 'react';
import PropTypes from "prop-types";
import {TodoItem} from "../todoItem/TodoItem";

export class TodoList extends React.Component {

    render() {
        return (
            this.props.todos.map((value, index, array) => {
                return <TodoItem key={index} index={index} text={value}/>
            })
        );
    }
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired
};