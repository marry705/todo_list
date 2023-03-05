import * as React from 'react';
import { render } from 'react-dom';
import { createStore, Store } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/index';
import { TodosAction, DispatchType, HistoryTodosState } from './redux/type';
import { setLocalStorage } from './services/storageService';

import App from './App';

// eslint-disable-next-line max-len
const store: Store<HistoryTodosState, TodosAction> & { dispatch: DispatchType } = createStore(rootReducer);

store.subscribe(() => {
  const state: HistoryTodosState = store.getState();
  setLocalStorage('tasks', state.toDoList.present.tasks);
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
