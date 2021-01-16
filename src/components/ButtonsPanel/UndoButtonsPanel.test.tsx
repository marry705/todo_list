import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, cleanup } from '@testing-library/react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import UndoButtonsPanel from './UndoButtonsPanel';
import rootReducer from '../../redux/index';

const store = createStore(rootReducer);

beforeEach(() => render(
  <Provider store={store}>
    <UndoButtonsPanel />
  </Provider>,
));

afterEach(cleanup);

test('Checking the initial rendering of the component UndoButtonsPanel', () => {
  expect(screen.getByRole('button', { name: 'UNDO' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'REDO' })).toBeInTheDocument();
});
