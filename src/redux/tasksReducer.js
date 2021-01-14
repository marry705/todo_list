import { TASKS } from '../constants/constants';
import { getLocalStorage, setLocalStorage } from '../services/storageService';

let tasks = getLocalStorage('tasks') ? JSON.parse(getLocalStorage('tasks')) : [];

const initialState = {
  tasks,
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASKS.ADD_NEW_TASK:
      tasks = state.tasks.concat([{ data: action.payload.data, id: `mr${(~~(Math.random() * 1e8)).toString(16)}s`, time: action.payload.time }]);
      tasks.sort((task1, task2) => (new Date(task1.time) > new Date(task2.time) ? 1 : -1));
      setLocalStorage('tasks', JSON.stringify(tasks));

      return { ...state, tasks };

    case TASKS.REMOVE_TASK:
      tasks = state.tasks.filter((task) => task.id !== action.payload);
      tasks.sort((task1, task2) => (new Date(task1.time) > new Date(task2.time) ? 1 : -1));
      setLocalStorage('tasks', JSON.stringify(tasks));

      return { ...state, tasks };

    case TASKS.CHANGE_TASK:
      tasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          return { data: action.payload.data, id: action.payload.id, time: action.payload.time };
        }
        return task;
      });
      tasks.sort((task1, task2) => (new Date(task1.time) > new Date(task2.time) ? 1 : -1));
      setLocalStorage('tasks', JSON.stringify(tasks));

      return { ...state, tasks };

    default: return state;
  }
};

export default tasksReducer;
