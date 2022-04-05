import { todoListState } from "./atom";
import { useRecoilState } from "recoil";
import { TodoType } from './todoTypes';
import { v4 as uuidv4 } from 'uuid';

export function useTodos() {
    const [todoLists, setTodoLists] = useRecoilState(todoListState);
    
    const addListItem = (title: string) => {
        setTodoLists((oldTodoList) => [
           ...oldTodoList, 
           {
                id: uuidv4(),
                title: title,
                completed: false,
            },
        ]);
    }
    
    const editItemTitle = (title: string, id: string) => {
        const index = getItemIndex(todoLists,id);
        const item = todoLists[index];
        const newList = replaceItemAtIndex(
            todoLists,
            {
                ...item,
                title: title,
            },
            index,
        );
        setTodoLists(newList);
    }
    
    const toggleItemCompletion = (id: string) => {
        const index = getItemIndex(todoLists,id);
        const item = todoLists[index];
        const newList = replaceItemAtIndex(
            todoLists,
            {
                ...item,
                completed: !item.completed,
            },
            index,
        )
        setTodoLists(newList);
    }
    
    const removeItem = (id: string) => {
        const index = getItemIndex(todoLists,id);
        const newList = [
            ...todoLists.slice(0, index),
            ...todoLists.slice(index + 1),
        ];
        setTodoLists(newList);
    }
    
    return {
        addListItem,
        editItemTitle,
        toggleItemCompletion,
        removeItem,
    }
}

function replaceItemAtIndex(list: TodoType[], newItem: TodoType, index: number) {
    return [
        ...list.slice(0, index),
        newItem,
        ...list.slice(index + 1),
    ];
}

function getItemIndex(lists: TodoType[], id: string) {
    return lists.findIndex((listItem) => listItem.id === id);
}
