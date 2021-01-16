import * as React from 'react';
import { render } from 'react-dom';
import { createStore, Store } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/index';
import { TodosAction, TodosState, DispatchType } from './redux/type';

import App from './App';

const store: Store<TodosState, TodosAction> & { dispatch: DispatchType } = createStore(rootReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
