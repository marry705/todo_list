import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';

import { onUndo, onRedo } from '../../redux/actions';
import { HistoryTodosState } from '../../redux/type';

const UndoButtonsPanel: React.FC = () => {
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
        className="undo-button"
      >
        UNDO
      </Button>
      <Button
        disabled={!canRedo}
        onClick={() => dispatch(onRedo())}
        variant="outlined"
        color="secondary"
        className="undo-button"
      >
        REDO
      </Button>
    </div>
  );
};

export default UndoButtonsPanel;
