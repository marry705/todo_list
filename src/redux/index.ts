import { combineReducers } from 'redux';
import undoable from 'redux-undo';
import tasksReducer from './tasksReducer';
import { TodosAction, TodosState } from './type';

const rootReducer = combineReducers({
  toDoList: undoable<TodosState, TodosAction>(tasksReducer),
});

export default rootReducer;
