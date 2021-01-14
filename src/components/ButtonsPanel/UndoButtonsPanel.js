import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';

import { onUndo, onRedo } from '../../redux/actions';

import './ButtonsPanel.css';

const UndoButtonsPanel = () => {
  const canUndo = useSelector(state => state.tasks.past.length > 0);
  const canRedo = useSelector(state => state.tasks.future.length > 0);

  const dispatch = useDispatch();

  return (
    <div className='buttons-container'>
        <Button disabled={!canUndo} 
                onClick={() => dispatch(onUndo())}
                variant='outlined' 
                color='secondary'
                className='undo-button'>
            UNDO
        </Button>
        <Button disabled={!canRedo} 
                onClick={() => dispatch(onRedo())}
                variant='outlined' 
                color='secondary'
                className='undo-button'>
            REDO
        </Button>
    </div>
  );
};

export default UndoButtonsPanel;