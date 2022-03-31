import React, { useState }  from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from './atom';
import { v4 as uuidv4 } from 'uuid';

export default function AddTodo(): React.ReactElement {
    const setTodoList = useSetRecoilState(todoListState);
    
    const [value, setValue] = useState<string>('');
    
    const addItem = () => {
        setTodoList((oldTodoList) => [
            ...oldTodoList,
            {
                id: uuidv4(),
                title: value,
                completed: false,
            }
        ]);
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
