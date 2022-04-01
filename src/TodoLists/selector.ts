import { selector } from "recoil"
import { todoListState, todoListFilteredByState } from "./atom"

export const filteredTodoListState = selector({
    key: 'FilteredTodoList',
    get: ({get}) => {
        const lists = get(todoListState);
        const filteredBy = get(todoListFilteredByState);
        
        switch(filteredBy) {
            case 'completed':
                return lists.filter(list => list.completed);
            case 'uncompleted':
                return lists.filter(list => !list.completed);
            default:
                return lists;
        }
    },
});

export const todoListStats = selector({
    key: 'todoListStats',
    get: ({get}) => {
        const lists = get(todoListState);
        const todoNum = lists.length;
        const completedNum = lists.filter(list => list.completed).length;
        const uncompletedNum = lists.filter(list => !list.completed).length;
        
        return {
            todoNum,
            completedNum,
            uncompletedNum,
        }
    }
})
