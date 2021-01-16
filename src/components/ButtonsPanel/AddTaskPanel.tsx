import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Input, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import { addTask } from '../../redux/actions';

import './ButtonsPanel.css';

const AddTaskPanel: React.FC = () => {
  const newTaskInput = React.useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const submitNewTask = () => {
    if (newTaskInput.current.value) {
      dispatch(addTask({ data: newTaskInput.current.value, id: '0', time: new Date().toString() }));
    }
    newTaskInput.current.value = '';
    newTaskInput.current.blur();
  };

  const keyPressHandler = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      submitNewTask();
    }
  };

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); }}
      className="form-container"
    >
      <Input
        fullWidth
        placeholder="Enter new task"
        inputRef={newTaskInput}
        onKeyPress={keyPressHandler}
      />
      <Button
        startIcon={<AddIcon />}
        onClick={submitNewTask}
      >
        Add
      </Button>
    </form>
  );
};

export default AddTaskPanel;
