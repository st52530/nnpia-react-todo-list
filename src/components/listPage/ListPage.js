import React from 'react';
import {AddTodo} from "../addTodo/AddTodo";
import {TodoList} from "../todoList/TodoList";
import './ListPage.css';

export class ListPage extends React.Component {

    render() {
        return (
            <div className="list-page">
                <h1>To-do list</h1>
                <hr />
                <AddTodo/>
                <hr />
                <TodoList />
            </div>
        );
    }
}