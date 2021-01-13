import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';

import { addTask } from '../../redux/actions';

const AddTaskPanel = () => {
    const newTask = useRef(null);
    const dispatch = useDispatch();

    const handleSubmitEvent = (e) => {
      e.preventDefault();
      dispatch(addTask({ data: newTask.current['tasktext'].value, time: new Date().getTime() }));
      newTask.current['tasktext'].value = '';
    };


    return (
      <form ref={newTask}
            onSubmit={handleSubmitEvent}>
            <TextField id='standard-basic'
                      name={'tasktext'}
                      label='Enter new task' />
      </form>
    );
};

export default AddTaskPanel;