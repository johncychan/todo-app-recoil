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
