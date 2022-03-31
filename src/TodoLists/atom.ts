import { atom } from 'recoil';
import { TodoType, filteredBy } from './todoTypes';


export const todoListState = atom({
    key: 'TodoList',
    default: [] as TodoType[],
});

export const todoListFilteredByState = atom({
    key: 'TodoListFilteredBy',
    default: 'all' as filteredBy,
})
