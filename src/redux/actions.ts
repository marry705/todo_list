import { ActionCreators as UndoActionCreators } from 'redux-undo';
import { Todo, TodosAction } from './type';
import { TASKS } from '../constants';

export const onUndo = UndoActionCreators.undo;

export const onRedo = UndoActionCreators.redo;

export const addTask = (data: Todo): TodosAction => ({
  type: TASKS.ADD_NEW_TASK,
  payload: data,
});

export const removeTask = (data: Todo): TodosAction => ({
  type: TASKS.REMOVE_TASK,
  payload: data,
});

export const changeTask = (data: Todo): TodosAction => ({
  type: TASKS.CHANGE_TASK,
  payload: data,
});
