import React from 'react';
import {AddTodo} from "../addTodo/AddTodo";
import {TodoList} from "../todoList/TodoList";
import './ListPage.css';

export class ListPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
    }

    onTodoAdded = (todoText) => {
        if (!todoText) {
            alert("Musíte vyplnit text!");
            return;
        }

        let todos = this.state.todos;
        todos.push(todoText);

        this.setState({
            todos: todos
        });
    };

    onTodoCompleted = (index) => {
        let todos = this.state.todos;
        todos.splice(index, 1);

        this.setState({
            todos: todos
        });
    };

    render() {
        return (
            <div className="list-page">
                <h1>To-do list aplikace</h1>
                <hr />
                <AddTodo handleClick={this.onTodoAdded.bind(this)}/>
                <hr />
                <TodoList todos={this.state.todos}  onTodoCompleted={this.onTodoCompleted.bind(this)}/>
            </div>
        );
    }
}