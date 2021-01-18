import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { createStore, Store } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from '../../redux/index';
import {
  TodosAction, TodosState, DispatchType, HistoryTodosState,
} from '../../redux/type';
import * as actions from '../../redux/actions';

import UndoButtonsPanel from './UndoButtonsPanel';

afterEach(cleanup);

test('Checking the initial rendering of the component UndoButtonsPanel', async () => {
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
  const store: Store<TodosState, TodosAction> & { dispatch: DispatchType } = createStore(rootReducer, initialHistoryState);

  act(() => {
    render(
      <Provider store={store}>
        <UndoButtonsPanel />
      </Provider>,
    );
  });

  expect(screen.getByRole('button', { name: 'UNDO' })).toBeDisabled();
  expect(screen.getByRole('button', { name: 'REDO' })).toBeDisabled();
});

test('Checking Undo|Redo buttons', async () => {
  const onUndo = jest.spyOn(actions, 'onUndo');
  const onRedo = jest.spyOn(actions, 'onRedo');
  const initialState:TodosState = {
    tasks: [
      {
        id: 'mr8c37c4s',
        time: 'Mon Jan 18 2021 16:29:43 GMT+0300 (Moscow Standard Time)',
        data: 'first',
      },
    ],
  };

  const initialHistoryState:HistoryTodosState = {
    toDoList: {
      past: [initialState],
      present: initialState,
      future: [initialState, initialState],
    },
  };

  // eslint-disable-next-line max-len
  const store: Store<TodosState, TodosAction> & { dispatch: DispatchType } = createStore(rootReducer, initialHistoryState);

  act(() => {
    render(
      <Provider store={store}>
        <UndoButtonsPanel />
      </Provider>,
    );
  });

  const buttonUndo = await screen.getByRole('button', { name: 'UNDO' });
  expect(buttonUndo).not.toBeDisabled();

  fireEvent.click(buttonUndo);

  expect(onUndo).toHaveBeenCalledTimes(1);
  expect(buttonUndo).toBeDisabled();

  const buttonRedo = await screen.getByRole('button', { name: 'REDO' });
  expect(buttonRedo).not.toBeDisabled();

  fireEvent.click(buttonRedo);

  expect(onRedo).toHaveBeenCalledTimes(1);
  expect(buttonUndo).not.toBeDisabled();
});
