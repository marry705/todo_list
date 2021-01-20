import * as React from 'react';
import { Box } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import ButtonsPanel from './components/ButtonsPanel';
import TasksList from './components/TasksList';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.default,
    textAlign: 'center',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <ButtonsPanel />
      <TasksList />
    </Box>
  );
};

export default App;
