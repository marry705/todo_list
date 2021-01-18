import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {
  render, cleanup, screen, fireEvent,
} from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { createStore, Store } from 'redux';
import { Provider } from 'react-redux';

import TaskCard from './TaskCard';
import rootReducer from '../../redux/index';
import {
  TodosState, TodosAction, DispatchType, Todo,
} from '../../redux/type';
import * as actions from '../../redux/actions';
import { dateOptions } from '../../constants';

afterEach(cleanup);

test('Checking the initial rendering of the component TaskCard first', async () => {
  // eslint-disable-next-line max-len
  const store: Store<TodosState, TodosAction> & { dispatch: DispatchType } = createStore(rootReducer);
  const taskTest1:Todo = {
    id: 'mr8c36c4s',
    time: 'Mon Jan 18 2021 16:29:43 GMT+0300 (Moscow Standard Time)',
    data: 'first',
  };

  act(() => {
    render(
      <Provider store={store}>
        <TaskCard task={taskTest1} />
      </Provider>,
    );
  });

  const listItem = await screen.findByText(taskTest1.data);
  expect(listItem).toBeInTheDocument();

  const listTimeItem = await screen.findByText(new Date(taskTest1.time).toLocaleDateString('ru', dateOptions));
  expect(listTimeItem).toBeInTheDocument();
});

test('Checking the initial rendering of the component TaskCard second', async () => {
  // eslint-disable-next-line max-len
  const store: Store<TodosState, TodosAction> & { dispatch: DispatchType } = createStore(rootReducer);
  const taskTest2:Todo = {
    id: 'mr8c36c4s',
    time: 'Mon Jan 19 2021 17:30:00 GMT+0300 (Moscow Standard Time)',
    data: 'second',
  };

  act(() => {
    render(
      <Provider store={store}>
        <TaskCard task={taskTest2} />
      </Provider>,
    );
  });

  const listItem = await screen.findByText(taskTest2.data);
  expect(listItem).toBeInTheDocument();

  const listTimeItem = await screen.findByText(new Date(taskTest2.time).toLocaleDateString('ru', dateOptions));
  expect(listTimeItem).toBeInTheDocument();
});

test('Checking Delete button', async () => {
  const removeTask = jest.spyOn(actions, 'removeTask');
  // eslint-disable-next-line max-len
  const store: Store<TodosState, TodosAction> & { dispatch: DispatchType } = createStore(rootReducer);
  const taskTest2:Todo = {
    id: 'mr8c36c4s',
    time: 'Mon Jan 19 2021 17:30:00 GMT+0300 (Moscow Standard Time)',
    data: 'second',
  };

  act(() => {
    render(
      <Provider store={store}>
        <TaskCard task={taskTest2} />
      </Provider>,
    );
  });

  fireEvent.click(screen.getByRole('button', { name: 'Delete' }));
  expect(removeTask).toHaveBeenCalledTimes(1);
});

test('Checking Edit button', async () => {
  const changeTask = jest.spyOn(actions, 'changeTask');
  // eslint-disable-next-line max-len
  const store: Store<TodosState, TodosAction> & { dispatch: DispatchType } = createStore(rootReducer);
  const taskTest3:Todo = {
    id: 'mr8c36c4s',
    time: 'Mon Jan 19 2021 17:30:00 GMT+0300 (Moscow Standard Time)',
    data: 'second',
  };

  act(() => {
    render(
      <Provider store={store}>
        <TaskCard task={taskTest3} />
      </Provider>,
    );
  });

  const taskInput = await screen.getByDisplayValue(taskTest3.data);
  expect(taskInput).toBeDisabled();

  fireEvent.click(screen.getByRole('button', { name: 'Edit' }));
  expect(taskInput).not.toBeDisabled();

  fireEvent.keyPress(taskInput, { key: 'Enter', charCode: 13 });
  expect(taskInput).toBeDisabled();
  expect(changeTask).toHaveBeenCalledTimes(1);
});
