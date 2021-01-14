import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Input, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import { addTask } from '../../redux/actions';

import './ButtonsPanel.css';

const AddTaskPanel = () => {
  const newTask = useRef(null);
  const dispatch = useDispatch();

  const submitNewTask = (e) => {
    e.preventDefault();
    if (newTask.current.tasktext.value) {
      dispatch(addTask({ data: newTask.current.tasktext.value, time: new Date() }));
    }
    newTask.current.tasktext.value = '';
    newTask.current.tasktext.blur();
  };

  return (
    <form
      ref={newTask}
      className="form-container"
    >
      <Input
        fullWidth
        name="tasktext"
        onKeyPress={(e) => (e.key === 'Enter' ? submitNewTask(e) : null)}
        label="Enter new task"
      />
      <Button
        startIcon={<AddIcon />}
        onClick={submitNewTask}
      />
    </form>
  );
};

export default AddTaskPanel;
