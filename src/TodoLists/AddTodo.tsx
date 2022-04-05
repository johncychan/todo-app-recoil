import React, { useState }  from 'react';
import { useTodos } from './todoList.hook';

export default function AddTodo(): React.ReactElement {
    const { addListItem } = useTodos();
    
    const [value, setValue] = useState<string>('');
    
    const addItem = () => {
        addListItem(value);
        setValue('');
    }
    
    return (
        <div style={ { display: 'flex' } }>
            <input
                type="text"
                value={value}
                onChange={event => setValue(event.target.value)}
            />
            <button
                onClick={addItem}
            >Add task</button>
        </div>
    )
}
