import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Input, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import { addTask } from '../../redux/actions';

const useStyles = makeStyles(() => createStyles({
  formContainer: {
    flex: '1 1 auto',
    display: 'flex',
    flexDirection: 'row',
  },
}));

const AddTaskPanel: React.FC = () => {
  const classes = useStyles();

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
      className={classes.formContainer}
    >
      <Input
        fullWidth
        type="text"
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
