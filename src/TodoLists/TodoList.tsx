import React from 'react';
import AddTodo from './AddTodo';
import TodoView from './TodoView';
import TodoFilter from './TodoFilter';
import TodoProgress from './TodoProgress';
import './TodoList.css';

export default function TodoList(): React.ReactElement {
    return (
        <section>
            <h2 className="mainHeading">Todo List with Recoil</h2>
            <h3>Add Item</h3>
            <AddTodo />
            <header className="todoListHeadning">
                <h3>Todo</h3>
                <TodoProgress />
            </header>
            <TodoFilter />
            <TodoView />
        </section>
    );
}
