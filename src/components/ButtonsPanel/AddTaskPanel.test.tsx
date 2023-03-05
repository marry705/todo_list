import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore, Store } from 'redux';
import '@testing-library/jest-dom/extend-expect';
import {
  render, cleanup, fireEvent, screen,
} from '@testing-library/react';

import rootReducer from '../../redux/index';
import {
  TodosAction, HistoryTodosState, DispatchType, Todo,
} from '../../redux/type';
import * as actions from '../../redux/actions';

import AddTaskPanel from './AddTaskPanel';

// eslint-disable-next-line max-len
const store: Store<HistoryTodosState, TodosAction> & { dispatch: DispatchType } = createStore(rootReducer);

beforeEach(() => {
  render(
    <Provider store={store}>
      <AddTaskPanel />
    </Provider>,
  );
});

afterEach(() => {
  cleanup();
});

test('Checking the initial rendering of the component AddTaskPanel', () => {
  expect(screen.getByRole('button', { name: 'Add' })).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Enter new task/i)).toBeInTheDocument();
});

test('Checking the Add button in the component AddTaskPanel', async () => {
  const newTaskTest:Todo = {
    id: '0',
    time: new Date().toString(),
    data: 'first test',
  };

  const addTask = jest.spyOn(actions, 'addTask');
  const inputNode = await screen.getByPlaceholderText(/Enter new task/i);

  fireEvent.change(inputNode, { target: { value: newTaskTest.data } });
  fireEvent.click(screen.getByRole('button', { name: 'Add' }));
  expect(addTask).toHaveBeenCalledTimes(1);
  expect(addTask).toHaveBeenLastCalledWith(newTaskTest);
});

test('Checking the input fild in the component AddTaskPanel', async () => {
  const newTaskTest1:Todo = {
    id: '0',
    time: new Date().toString(),
    data: 'second test',
  };

  const addTask = jest.spyOn(actions, 'addTask');
  const inputNode = await screen.getByPlaceholderText(/Enter new task/i);

  fireEvent.change(inputNode, { target: { value: newTaskTest1.data } });
  expect(inputNode).toHaveValue(newTaskTest1.data);
  fireEvent.keyPress(inputNode, { key: 'Enter', charCode: 13 });
  expect(addTask).toHaveBeenCalledTimes(2);
  expect(addTask).toHaveBeenLastCalledWith(newTaskTest1);
});

test('Checking the input fild with empty data in the component AddTaskPanel', async () => {
  const addTask = jest.spyOn(actions, 'addTask');
  const inputNode = await screen.getByPlaceholderText(/Enter new task/i);

  fireEvent.change(inputNode, { target: { value: '' } });
  fireEvent.keyPress(inputNode, { key: 'Enter', charCode: 13 });
  expect(addTask).toHaveBeenCalledTimes(2);
});
