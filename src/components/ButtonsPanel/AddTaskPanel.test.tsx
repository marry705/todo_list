import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore, Store } from 'redux';
import '@testing-library/jest-dom/extend-expect';
import {
  render, cleanup, fireEvent, screen,
} from '@testing-library/react';

import rootReducer from '../../redux/index';
import { TodosAction, TodosState, DispatchType } from '../../redux/type';
import * as actions from '../../redux/actions';

import AddTaskPanel from './AddTaskPanel';

const store: Store<TodosState, TodosAction> & { dispatch: DispatchType } = createStore(rootReducer);

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
  const addTask = jest.spyOn(actions, 'addTask');
  const inputNode = await screen.getByPlaceholderText(/Enter new task/i);

  fireEvent.change(inputNode, { target: { value: 'first test' } });
  expect(inputNode).toHaveValue('first test');

  fireEvent.click(screen.getByRole('button', { name: 'Add' }));
  expect(addTask).toHaveBeenCalledTimes(1);

  fireEvent.change(inputNode, { target: { value: '' } });

  fireEvent.click(screen.getByRole('button', { name: 'Add' }));
  expect(addTask).toHaveBeenCalledTimes(1);

  fireEvent.change(inputNode, { target: { value: 'second test' } });
  fireEvent.keyPress(inputNode, { key: 'Enter', charCode: 13 });
  expect(addTask).toHaveBeenCalledTimes(2);
});
