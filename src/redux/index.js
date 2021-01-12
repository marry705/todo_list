import { combineReducers } from 'redux';
import undoable from 'redux-undo';
import tasksReducer from './tasksReducer';

export const rootReducer = combineReducers({
    tasks: undoable(tasksReducer)
});

export default rootReducer;