import * as React from 'react';
import { useSelector } from 'react-redux';
import { List } from '@material-ui/core';

import { HistoryTodosState } from '../../redux/type';
import TaskCard from './TaskCard';

import './TasksList.css';

const TasksContainer: React.FC = () => {
  const { tasks } = useSelector((state: HistoryTodosState) => state.tasks.present);

  console.log(tasks);

  return (
    <div className="tasks-wrapper">
      {/* <List>
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
          />
        ))}
      </List> */}
    </div>
  );
};

export default TasksContainer;
