import React from 'react';
import { useRecoilState } from 'recoil';
import { todoListFilteredByState } from './atom';

export default function TodoFilter(): React.ReactElement {
    const [filteredBy, setFilteredBy] = useRecoilState(todoListFilteredByState);
    
    return (
        <>
            <button onClick={() => setFilteredBy('all')} style={{color: filteredBy === "all" ? "black" : ''}}>All</button>
            <button onClick={() => setFilteredBy('completed')} style={{color: filteredBy === "completed" ? "black" : ''}}>Completed</button>
            <button onClick={() => setFilteredBy('uncompleted')} style={{color: filteredBy === "uncompleted" ? "black" : ''}}>Uncompleted</button>
        </>
    )
}