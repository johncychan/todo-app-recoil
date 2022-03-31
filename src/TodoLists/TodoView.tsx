import React from 'react';
import TodoItem from './TodoItem';
import { useRecoilValue } from 'recoil';
import { filteredTodoListState } from './selector';


export default function TodoView(): React.ReactElement {
    const todoList = useRecoilValue(filteredTodoListState);
    return (
        <>
            {todoList.map(todoItem =>(
                <TodoItem key={todoItem.id} item={todoItem}/>
            ))}        
        </>
    );
}
