import { TASKS } from '../constants/constants';

export const getLocalStorage = (key) => {
  return window.localStorage.getItem(key);
};

export const setLocalStorage = (key, value) => {
  window.localStorage.setItem(key, value);
};
//
export const addTask = (data) => {
  return {
    type: TASKS.ADD_NEW_TASK,
    payload: data,
  }
};

export const removeTask = (data) => {
  return {
    type: TASKS.REMOVE_TASK,
    payload: data,
  }
};

export const changeTask = (data) => {
  return {
    type: TASKS.CHANGE_TASK,
    payload: data,
  }
};