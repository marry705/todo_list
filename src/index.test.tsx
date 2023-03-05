import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup, screen } from '@testing-library/react';

import { createStore, Store } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import rootReducer from './redux/index';
import { TodosAction, HistoryTodosState, DispatchType } from './redux/type';

// eslint-disable-next-line max-len
const store: Store<HistoryTodosState, TodosAction> & { dispatch: DispatchType } = createStore(rootReducer);

beforeEach(() => render(
  <Provider store={store}>
    <App />
  </Provider>,
));

afterEach(cleanup);

test('Checking the initial rendering of the main component', () => {
  expect(screen.getByRole('button', { name: 'Add' })).toBeInTheDocument();
  expect(screen.getByRole('list')).toBeInTheDocument();
});
