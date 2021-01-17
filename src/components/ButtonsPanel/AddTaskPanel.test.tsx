import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {
  render, fireEvent, screen, waitFor,
} from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import * as actions from '../../redux/actions';

import AddTaskPanel from './AddTaskPanel';

const mockStore = configureMockStore();
const store = mockStore({});

jest.mock('react-redux', () => ({
  connect: () => jest.fn(),
  useSelector: jest.fn((fn) => fn()),
  useDispatch: () => jest.fn(),
}));

beforeEach(() => {
  render(
    <Provider store={store}>
      <AddTaskPanel />
    </Provider>,
  );
});

afterEach(() => {
  jest.clearAllMocks();
});

afterAll(() => {
  jest.restoreAllMocks();
});

test('Checking the initial rendering of the component AddTaskPanel', () => {
  expect(screen.getByRole('button', { name: 'Add' })).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Enter new task/i)).toBeInTheDocument();
});

test('Checking the input field in the component AddTaskPanel', async () => {
  console.log(store.getActions());
  const inputNode = await screen.getByPlaceholderText(/Enter new task/i);
  await waitFor(() => fireEvent.change(inputNode,
    { target: { value: 'first test' } }));
  await waitFor(() => {
    expect(inputNode).toHaveValue('first test');
  });

  await waitFor(() => fireEvent.keyDown(inputNode,
    { key: 'Enter', code: 'Enter' }));

  await waitFor(() => {
    // expect(inputNode).not.toHaveValue('first test');
    // expect(addTask).toHaveBeenCalledTimes(1);
  });

  // fireEvent.change(taskInput, { target: { value: '' } });
  // fireEvent.keyDown(taskInput, { key: 'Enter', code: 'Enter' });
  // expect(addTask).toHaveBeenCalledTimes(0);
});

test('Checking the Add button in the component AddTaskPanel', async () => {
  const addTask = jest.spyOn(actions, 'addTask');
  const inputNode = await screen.getByPlaceholderText(/Enter new task/i);
  await waitFor(() => fireEvent.change(inputNode,
    { target: { value: 'second test' } }));

  await waitFor(() => fireEvent.click(screen.getByRole('button', { name: 'Add' })));
  await waitFor(() => {
    // expect(inputNode).toHaveValue('second test');
    // expect(addTask).toHaveBeenCalledTimes(1);
  });
});
