import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import { onUndo, onRedo } from '../../redux/actions';
import { HistoryTodosState } from '../../redux/type';

const useStyles = makeStyles((theme: Theme) => createStyles({
  undoButton: {
    marginLeft: theme.spacing(1),
  },
}));

const UndoButtonsPanel: React.FC = () => {
  const classes = useStyles();

  const canUndo:boolean = useSelector((state: HistoryTodosState) => state.toDoList.past.length > 0);
  // eslint-disable-next-line max-len
  const canRedo:boolean = useSelector((state: HistoryTodosState) => state.toDoList.future.length > 0);

  const dispatch = useDispatch();

  return (
    <div>
      <Button
        disabled={!canUndo}
        onClick={() => dispatch(onUndo())}
        variant="outlined"
        color="secondary"
        className={classes.undoButton}
      >
        UNDO
      </Button>
      <Button
        disabled={!canRedo}
        onClick={() => dispatch(onRedo())}
        variant="outlined"
        color="secondary"
        className={classes.undoButton}
      >
        REDO
      </Button>
    </div>
  );
};

export default UndoButtonsPanel;
