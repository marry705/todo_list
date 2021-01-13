import { TASKS } from '../constants/constants';
import { getLocalStorage, setLocalStorage } from './actions';

let tasks = getLocalStorage('tasks') ? JSON.parse(getLocalStorage('tasks')) : [];

const initialState = {
    tasks: tasks
};

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case TASKS.ADD_NEW_TASK:
          tasks = state['tasks'].concat([{ data: action.payload.data, id: action.payload.data, time: action.payload.time }]);
          setLocalStorage('tasks', JSON.stringify(tasks));
          return {...state, tasks: tasks};

        case TASKS.REMOVE_TASK:
          posts = state['tasks'].filter( task => task.id !== action.payload);
          setLocalStorage('tasks', JSON.stringify(tasks));
          return {...state, tasks: tasks};

        case TASKS.CHANGE_TASK:
          tasks = state['tasks'].map( task => {
            if (task.id === action.payload.id) {
              return { data: action.payload.data, id: task.id, time: action.payload.time };
            }
            return task;
          })
          setLocalStorage('tasks', JSON.stringify(tasks));
          return {...state, tasks: tasks};
  
        default: return state
    }
};

export default tasksReducer;