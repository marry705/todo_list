import * as React from 'react';
import { AppBar } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import AddTaskPanel from './AddTaskPanel';
import UndoButtonsPanel from './UndoButtonsPanel';

const useStyles = makeStyles((theme: Theme) => createStyles({
  headerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
    alignItems: 'center',
  },
}));

const ButtonsPanel: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.headerBar} color="transparent" position="static">
      <AddTaskPanel />
      <UndoButtonsPanel />
    </AppBar>
  );
};

export default ButtonsPanel;
