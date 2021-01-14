import React from 'react';
import ButtonsPanel from './components/ButtonsPanel/ButtonsPanel';
import TasksList from './components/TasksList/TasksList';

import './index.css';

const App = () => (
  <div className='main-wrapper'>
      <ButtonsPanel />
      <TasksList />
  </div>
);

export default App;