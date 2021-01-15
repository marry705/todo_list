import * as React from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button, ListItem } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { removeTask, changeTask } from '../../redux/actions';
import { Todo } from '../../redux/type';

const dateOptions = {
  year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric',
};

interface Props {
  task: Todo
}

const TaskCard: React.FC<Props> = ({ task }: Props) => {
  const [taskText, changeTaskText] = React.useState<string>(task.data);
  const dispatch = useDispatch();

  React.useEffect(() => {
    changeTaskText(task.data);
  }, [task.data]);

  const submitNewTaskText = (e: React.KeyboardEvent) => {
    dispatch(changeTask({ data: taskText, id: task.id, time: new Date().toString() }));
    e.target.blur();
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeTaskText(e.target.value);
  };

  const keyPressHandler = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      submitNewTaskText(e);
    }
  };

  return (
    <ListItem>
      <form
        onSubmit={(e) => { e.preventDefault(); }}
        className="task-form-card"
      >
        <Button
          onClick={() => dispatch(removeTask(task))}
          startIcon={<DeleteIcon />}
        />
        <TextField
          fullWidth
          value={taskText}
          onChange={changeHandler}
          onKeyPress={keyPressHandler}
          label="Click to change"
        />
      </form>
      <div>{new Date(task.time).toLocaleDateString('ru', dateOptions)}</div>
    </ListItem>
  );
};

export default TaskCard;
