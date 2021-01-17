import * as React from 'react';
import { useSelector } from 'react-redux';
import { List, ListItem } from '@material-ui/core';

import { HistoryTodosState } from '../../redux/type';
import TaskCard from './TaskCard';

import './TasksList.css';

const TasksContainer: React.FC = () => {
  const { tasks } = useSelector((state: HistoryTodosState) => state.toDoList.present);

  return (
    <div className="tasks-wrapper">
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
