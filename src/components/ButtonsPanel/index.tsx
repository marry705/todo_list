import * as React from 'react';
import { AppBar } from '@material-ui/core';

import AddTaskPanel from './AddTaskPanel';
import UndoButtonsPanel from './UndoButtonsPanel';

import './ButtonsPanel.css';

const ButtonsPanel: React.FC = () => (
  <AppBar color="transparent" position="static">
    <AddTaskPanel />
    <UndoButtonsPanel />
  </AppBar>
);

export default ButtonsPanel;
