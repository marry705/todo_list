import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { removeTask, changeTask } from '../../redux/actions';

const dateOptions = {
  year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric',
};

const TaskCard = ({ task, style }) => {
  const [taskText, changeTaskText] = useState(task.data);
  const dispatch = useDispatch();

  useEffect(() => {
    changeTaskText(task.data);
  }, [task.data]);

  const submitNewTaskText = (e) => {
    dispatch(changeTask({ data: taskText, id: task.id, time: new Date() }));
    e.target.blur();
  };

  return (
    <div style={style} className="task-card">
      <form
        onSubmit={(e) => { e.preventDefault(); }}
        className="task-form-card"
      >
        <Button
          onClick={() => dispatch(removeTask(task.id))}
          startIcon={<DeleteIcon />}
        />
        <TextField
          fullWidth
          value={taskText}
          onChange={(e) => changeTaskText(e.target.value)}
          onKeyPress={(e) => (e.key === 'Enter' ? submitNewTaskText(e) : null)}
          label="Click to change"
        />
      </form>
      <div>{new Date(task.time).toLocaleDateString('ru', dateOptions)}</div>
    </div>
  );
};

export default TaskCard;
