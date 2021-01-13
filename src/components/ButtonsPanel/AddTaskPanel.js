import React from 'react';
import { useDispatch } from 'react-redux';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import { addTask } from '../../redux/actions';

const useStyles = makeStyles( (theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);

const AddTaskPanel = () => {
    const dispatch = useDispatch();
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-basic" label="Standard" />
        </form>
    );
};

export default AddTaskPanel;