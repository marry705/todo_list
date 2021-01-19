import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Input, Button, ListItemText } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import { removeTask, changeTask } from '../../redux/actions';
import { Todo } from '../../redux/type';
import { dateOptions } from '../../constants';

interface Props {
  task: Todo
}

const useStyles = makeStyles(() => createStyles({
  timeLine: {
    marginLeft: 'auto',
    flex: '0 0 auto',
  },
  noActive: {
    display: 'none',
  },
  taskButton: {
    marginRight: 'auto',
    flex: '0 0 auto',
  },
}));

const TaskCard: React.FC<Props> = ({ task }: Props) => {
  const classes = useStyles();

  const taskInput = React.useRef<HTMLInputElement>(null);
  const taskTextContainer = React.useRef<HTMLDivElement>(null);

  const [taskText, changeTaskText] = React.useState<string>(task.data);
  const dispatch = useDispatch();

  React.useEffect(() => {
    changeTaskText(task.data);
  }, [task.data]);

  const openTaskEditor = () => {
    taskTextContainer.current.classList.add('no-active');
    taskInput.current.disabled = false;
    taskInput.current.parentElement.classList.remove('no-active');
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeTaskText(e.target.value);
  };

  const keyPressHandler = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.stopPropagation();
      dispatch(changeTask({ data: taskText, id: task.id, time: new Date().toString() }));
      taskInput.current.parentElement.classList.add('no-active');
      taskInput.current.disabled = true;
      taskTextContainer.current.classList.remove('no-active');
    }
  };

  return (
    <>
      <Button
        className={classes.taskButton}
        onClick={() => dispatch(removeTask(task))}
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
      <Button
        className={classes.taskButton}
        onClick={() => openTaskEditor()}
        startIcon={<EditIcon />}
      >
        Edit
      </Button>
      <ListItemText primary={taskText} ref={taskTextContainer} />
      <Input
        fullWidth
        disabled
        type="text"
        className={classes.noActive}
        inputRef={taskInput}
        value={taskText}
        onChange={changeHandler}
        onKeyPress={keyPressHandler}
      />
      <ListItemText primary={new Date(task.time).toLocaleDateString('ru', dateOptions)} className={classes.timeLine} />
    </>
  );
};

export default TaskCard;
