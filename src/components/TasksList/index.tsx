import * as React from 'react';
import { useSelector } from 'react-redux';
import { List, ListItem } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import { HistoryTodosState } from '../../redux/type';
import TaskCard from './TaskCard';

const useStyles = makeStyles(() => createStyles({
  root: {
    height: 'calc(100vh - 150px)',
    width: '80%',
    '& .MuiList-root': {
      overflowY: 'auto',
      height: '100%',
    },
    '& .MuiListItemText-root': {
      wordBreak: 'break-all',
    },
  },
}));

const TasksContainer: React.FC = () => {
  const classes = useStyles();
  const { tasks } = useSelector((state: HistoryTodosState) => state.toDoList.present);

  return (
    <div className={classes.root}>
      <List>
        {tasks.map((task) => (
          <ListItem key={task.id}>
            <TaskCard task={task} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TasksContainer;
