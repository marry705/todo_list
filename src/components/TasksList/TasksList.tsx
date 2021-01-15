import * as React from 'react';
import { useSelector } from 'react-redux';
import { ListItem } from '@material-ui/core';
import { FixedSizeList, ListChildComponentProps } from 'react-window';

import { HistoryTodosState } from '../../redux/type';
import TaskCard from './TaskCard';

import './TasksList.css';

const TasksContainer: React.FC = () => {
  const { tasks } = useSelector((state: HistoryTodosState) => state.toDoList.present);

  const renderRow = (props: ListChildComponentProps) => {
    const { index, style } = props;

    return (
      <ListItem style={style} key={index}>
        <TaskCard task={tasks[index]} />
      </ListItem>
    );
  };

  return (
    <div className="tasks-wrapper">
      <FixedSizeList height={400} width={800} itemSize={90} itemCount={tasks.length}>
        {renderRow}
      </FixedSizeList>
    </div>
  );
};

export default TasksContainer;
