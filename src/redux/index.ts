import { combineReducers } from 'redux';
import undoable from 'redux-undo';
import tasksReducer from './tasksReducer';
import { TodosState, TodosAction } from './type';

const rootReducer = combineReducers({
  tasks: undoable<TodosState, TodosAction>(tasksReducer),
});

export default rootReducer;
