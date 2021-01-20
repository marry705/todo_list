import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { createStore, Store } from 'redux';
import { Provider } from 'react-redux';

import TasksList from './index';
import rootReducer from '../../redux/index';
import {
  TodosState, HistoryTodosState, TodosAction, DispatchType,
} from '../../redux/type';

afterEach(cleanup);

test('Checking the initial rendering of the component TasksList', async () => {
  const initialState:TodosState = {
    tasks: [
      {
        id: 'mr8c37c4s',
        time: 'Mon Jan 18 2021 16:29:43 GMT+0300 (Moscow Standard Time)',
        data: 'first',
      },
      {
        id: 'mr8c36c4s',
        time: 'Mon Jan 18 2021 16:30:43 GMT+0300 (Moscow Standard Time)',
        data: 'second',
      },
    ],
  };

  const initialHistoryState:HistoryTodosState = {
    toDoList: {
      past: [],
      present: initialState,
      future: [],
    },
  };
  // eslint-disable-next-line max-len
  const store: Store<HistoryTodosState, TodosAction> & { dispatch: DispatchType } = createStore(rootReducer, initialHistoryState);

  act(() => {
    render(
      <Provider store={store}>
        <TasksList />
      </Provider>,
    );
  });

  expect(screen.getByRole('list')).toBeInTheDocument();
  let listItem = await screen.findByText(initialState.tasks[0].data);
  expect(listItem).toBeInTheDocument();

  listItem = await screen.findByText(initialState.tasks[1].data);
  expect(listItem).toBeInTheDocument();
});
