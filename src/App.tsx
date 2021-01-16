import * as React from 'react';
import ButtonsPanel from './components/ButtonsPanel';
import TasksList from './components/TasksList';

import './index.css';

const App: React.FC = () => (
  <div className="main-wrapper">
    <ButtonsPanel />
    <TasksList />
  </div>
);

export default App;
