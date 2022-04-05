import React from 'react';
import { TodoType } from './todoTypes';
import { useTodos } from './todoList.hook';

interface Props {
    item: TodoType;
}

export default function TodoItem({item}: Props): React.ReactElement {
    const { editItemTitle, toggleItemCompletion, removeItem } = useTodos();
    
    const onToggleComplete = () => {
        toggleItemCompletion(item.id);
    }
    
    const onEditTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        editItemTitle(event.target.value, item.id);
    }
    
    const onRemove = () => {
        removeItem(item.id);
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
