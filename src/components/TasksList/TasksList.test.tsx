import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { createStore, Store } from 'redux';
import { Provider } from 'react-redux';

import TasksList from './index';
import rootReducer from '../../redux/index';
import { TodosState, TodosAction, DispatchType } from '../../redux/type';

afterEach(cleanup);

test('Checking the initial rendering of the component TaskList', () => {
  // eslint-disable-next-line max-len
  const store: Store<TodosState, TodosAction> & { dispatch: DispatchType } = createStore(rootReducer);

  act(() => {
    render(
      <Provider store={store}>
        <TasksList />
      </Provider>,
    );
  });
  expect(screen.getByRole('list')).toBeInTheDocument();
});

test('Checking the initial rendering of the component TaskList', () => {
//   const store = createStore(rootReducer, initialState);

  //   act(() => {
  //     render(
  //       <Provider store={store}>
  //         <TaskList />
  //       </Provider>,
  //     );
  //   });
  //   expect(screen.getByRole('button', { name: 'Add' })).toBeInTheDocument();

//   act(() => {
//     render(<TaskCard />);
//   });
});
