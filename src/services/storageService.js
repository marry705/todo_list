export const getLocalStorage = (key) => window.localStorage.getItem(key);

export const setLocalStorage = (key, value) => {
  window.localStorage.setItem(key, value);
};
