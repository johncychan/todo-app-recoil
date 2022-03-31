import React from 'react';
import { TodoType } from './todoTypes';
import useTodoList from './useTodoList';

interface Props {
    item: TodoType;
}

export default function TodoItem({item}: Props): React.ReactElement {
    const { todoList, setTodoList } = useTodoList(); // this is a custom hook, see useTodoList.ts for details
    const index = todoList.findIndex((listItem) => listItem === item);
    
    const onToggleComplete = () => {
        // [items behind, updated current items, items after]
        const newList = [
            ...todoList.slice(0, index),
            {
                ...item,
                completed: !item.completed,
            },
            ...todoList.slice(index + 1),
        ];
        setTodoList(newList);
    }
    
    const onEditTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        
        // [items behind, updated current items, items after]
        const newList = [
            ...todoList.slice(0, index),
            {
                ...item,
                title: value,
            },
            ...todoList.slice(index + 1),
        ];
        setTodoList(newList);
    }
    
    const onRemove = () => {
        const newList = [
            ...todoList.slice(0, index),
            ...todoList.slice(index + 1),
        ];
        setTodoList(newList);
    }
    
    return (
        <>
            <li className="todoItems">
                <input type="checkbox" checked={item.completed} onChange={onToggleComplete} />
                <input type="text" value={item.title} onChange={onEditTitle}/>
                <div className="buttonGroup">
                    <button onClick={onRemove}>Delete</button>
                </div>
            </li>
        </>
    );
}
