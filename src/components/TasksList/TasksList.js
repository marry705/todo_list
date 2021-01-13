import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask } from '../../redux/actions';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

const TasksContainer = () => {
    const { tasks } = useSelector(state => state.tasks.present);
    const dispatch = useDispatch();

    const TaskRow = ({ index, key, style }) => {
        return (
            <div key={key} style={style}>
                <button onClick={() => dispatch(removeTask(tasks[index].id))}></button>
                <div>{tasks[index].data}</div>
            </div>
        );
    };

    return (
        <AutoSizer>
            {({ height, width }) => (
                <List
                    classNmae='List'
                    width={width}
                    height={height}
                    itemSize={65}
                    itemCount={tasks.length}> 

                    {TaskRow}

                </List>
            )}
        </AutoSizer>
    );
};

export default TasksContainer;