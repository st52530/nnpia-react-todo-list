import React from 'react';
import {AddTodo} from "../addTodo/AddTodo";
import {TodoList} from "../todoList/TodoList";

export class ListPage extends React.Component {

    render() {
        return (
            <div>
                <AddTodo/>
                <TodoList />
            </div>
        );
    }
}