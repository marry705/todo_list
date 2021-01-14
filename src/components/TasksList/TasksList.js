import React from 'react';
import { useSelector } from 'react-redux';
import { List } from 'react-virtualized';
import AutoSizer from 'react-virtualized-auto-sizer';

import TaskCard from './TaskCard';

import 'react-virtualized/styles.css';
import './TasksList.css';

const TasksContainer = () => {
  const { tasks } = useSelector((state) => state.tasks.present);

  const TaskCardRender = ({ index, style }) => (
    <TaskCard key={tasks[index].id} task={tasks[index]} style={style} />
  );

  return (
    <div className="tasks-wrapper">
      <AutoSizer>
        {({ height, width }) => (
          <List
            height={height}
            width={width}
            rowCount={tasks.length}
            rowHeight={65}
            rowRenderer={TaskCardRender}
          />
        )}
      </AutoSizer>
    </div>
  );
};

export default TasksContainer;
