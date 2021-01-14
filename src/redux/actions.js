import { ActionCreators as UndoActionCreators } from 'redux-undo';
import { TASKS } from '../constants/constants';

export const onUndo = UndoActionCreators.undo;

export const onRedo = UndoActionCreators.redo;

export const addTask = (data) => ({
  type: TASKS.ADD_NEW_TASK,
  payload: data,
});

export const removeTask = (data) => ({
  type: TASKS.REMOVE_TASK,
  payload: data,
});

export const changeTask = (data) => ({
  type: TASKS.CHANGE_TASK,
  payload: data,
});
