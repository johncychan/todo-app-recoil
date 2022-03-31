// custom hook that importing the todoListState atom and export the state and set state
// saving time for repetitive imports of todoListState and useRecoilState and useRecoilValue from recoil;

import { useRecoilState } from "recoil";
import { todoListState } from "./atom";

const useTodoList = () => {
    const [todoList, setTodoList] = useRecoilState(todoListState);
    
    return {todoList, setTodoList};
};

export default useTodoList;
