import { TASKS } from '../constants';
import { getLocalStorage } from '../services/storageService';
import { TodosState, TodosAction, Todo } from './type';

let tasks = getLocalStorage('tasks');

const initialState: TodosState = {
  tasks,
};

const tasksReducer = (
  state: TodosState = initialState,
  action: TodosAction,
): TodosState => {
  switch (action.type) {
    case TASKS.ADD_NEW_TASK:
      tasks = state.tasks.concat([{ data: action.payload.data, id: `mr${(~~(Math.random() * 1e8)).toString(16)}s`, time: action.payload.time }]);
      // eslint-disable-next-line max-len
      tasks.sort((task1: Todo, task2: Todo) => (new Date(task1.time) > new Date(task2.time) ? -1 : 1));

      return { ...state, tasks };

    case TASKS.REMOVE_TASK:
      tasks = state.tasks.filter((task) => task.id !== action.payload.id);
      // eslint-disable-next-line max-len
      tasks.sort((task1: Todo, task2: Todo) => (new Date(task1.time) > new Date(task2.time) ? -1 : 1));

      return { ...state, tasks };

    case TASKS.CHANGE_TASK:
      tasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          return { data: action.payload.data, id: action.payload.id, time: action.payload.time };
        }
        return task;
      });
      // eslint-disable-next-line max-len
      tasks.sort((task1: Todo, task2: Todo) => (new Date(task1.time) > new Date(task2.time) ? -1 : 1));

      return { ...state, tasks };

    default: return state;
  }
};

export default tasksReducer;
