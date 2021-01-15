import TASKS from '../constants/constants';

export type Todo = {
    id: string,
    data: string,
    time: string
};

export type TodosState = {
    tasks: Todo[]
};

export type HistoryTodosState = {
    tasks:{
        past: Todo[],
        present: Todo[],
        future: Todo[],
    }
};
//
interface addTaskAction {
    type: typeof TASKS.ADD_NEW_TASK,
    payload: Todo,
}

interface changeTaskAction {
    type: typeof TASKS.CHANGE_TASK,
    payload: Todo,
}

interface removeTaskAction {
    type: typeof TASKS.REMOVE_TASK,
    payload: Todo,
}

export type TodosAction = addTaskAction | removeTaskAction | changeTaskAction;

export type DispatchType = (args: TodosAction) => TodosAction;
