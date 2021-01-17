import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup, screen } from '@testing-library/react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import TaskCard from './TaskCard';

afterEach(cleanup);

test('Checking the initial rendering of the component TaskCard', () => {

  //     const initialState = {
  //         user: { name: "mock name" },
  //     };
  //     const store = createStore(rootReducer, initialState);
  //   act(() => {
  //     render(<TaskCard />);
  //   });
  //  expect(screen.getByRole('button', { name: 'Add' })).toBeInTheDocument();

  //   act(() => {
  //     render(<TaskCard />);
  //   });

//   expect(screen.getByRole('button', { name: 'Add' })).toBeInTheDocument();
});
