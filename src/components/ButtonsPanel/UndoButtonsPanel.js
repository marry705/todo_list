import React from 'react';
import { connect } from 'react-redux';
import { ActionCreators as UndoActionCreators } from 'redux-undo';
import Button from '@material-ui/core/Button';

let UndoButtonsPanel = ({ canUndo, canRedo, onUndo, onRedo }) => {

  return (
    <div>
        <Button disabled={!canUndo} 
                onClick={onUndo}
                variant='outlined' 
                color='secondary'>
            UNDO
        </Button>
        <Button disabled={!canRedo} 
                onClick={onRedo}
                variant='outlined' 
                color='secondary'>
            REDO
        </Button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  canUndo: state.tasks.past.length > 0,
  canRedo: state.tasks.future.length > 0
});

const mapDispatchToProps = ({
  onUndo: UndoActionCreators.undo,
  onRedo: UndoActionCreators.redo
});

UndoButtonsPanel = connect( mapStateToProps, mapDispatchToProps )(UndoButtonsPanel);

export default UndoButtonsPanel;