import { Todo } from '../redux/type';

// eslint-disable-next-line max-len
export const getLocalStorage = (key: string):Todo[] => (window.localStorage.getItem(key) ? JSON.parse(window.localStorage.getItem(key)) : []);

export const setLocalStorage = (key: string, value: Todo[]):void => {
  window.localStorage.setItem(key, JSON.stringify(value));
};
