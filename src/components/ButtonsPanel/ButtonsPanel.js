import React from 'react';
import AddTaskPanel from './AddTaskPanel';
import UndoButtonsPanel from './UndoButtonsPanel';

import './ButtonsPanel.css';

const ButtonsPanel = () => (
  <div className="header-wrapper">
    <AddTaskPanel />
    <UndoButtonsPanel />
  </div>
);

export default ButtonsPanel;
