import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/user-event';
import {
  render, screen, cleanup, fireEvent,
} from '@testing-library/react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import AddTaskPanel from './AddTaskPanel';
import rootReducer from '../../redux/index';

const store = createStore(rootReducer);

beforeEach(() => render(
  <Provider store={store}>
    <AddTaskPanel />
  </Provider>,
));

afterEach(cleanup);

test('Checking the initial rendering of the component AddTaskPanel', () => {
  expect(screen.getByRole('button', { name: 'Add' })).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Enter new task')).toBeInTheDocument();
});

test('Checking the initial rendering of the component AddTaskPanel', () => {
  const taskInput = screen.getByPlaceholderText('Enter new task');

  fireEvent.change(taskInput, { target: { value: 'dyhfbguvidrfhnbvgn' } });
  expect(screen.getByDisplayValue('dyhfbguvidrfhnbvgn')).toBeInTheDocument();
  fireEvent.keyDown(taskInput, { key: 'Enter', code: 'Enter' });

  expect(screen.getByDisplayValue('dyhfbguvidrfhnbvgn')).toBeInTheDocument();

  fireEvent.change(taskInput, { target: { value: '' } });
  fireEvent.keyDown(taskInput, { key: 'Enter', code: 'Enter' });
});
