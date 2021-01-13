import React from 'react';
import { useSelector } from 'react-redux';

const TasksContainer = () => {
    const { tasks } = useSelector(state => state.tasks.present);
    console.log(tasks);
    return (
        <div>
            Hello there
        </div>
    );
};

export default TasksContainer;