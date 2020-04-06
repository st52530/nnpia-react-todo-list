import React from 'react';
import PropTypes from "prop-types";
import {TodoItem} from "../todoItem/TodoItem";

export class TodoList extends React.Component {

    render() {
        let listItems = this.props.todos.map((value, index, array) => {
            return <TodoItem
                key={index}
                index={index}
                text={value}
                onTodoCompleted={this.props.onTodoCompleted}
            />
        });

        if (listItems.length === 0) {
            return <h3>Vše splněno!</h3>;
        }

        return (
            <div>
                <p>Celkový počet To-dos: <b>{listItems.length}</b></p>
                {listItems}
            </div>
        );
    }
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    onTodoCompleted: PropTypes.func.isRequired
};