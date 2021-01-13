import React from 'react';
import { connect } from 'react-redux';
import { ActionCreators as UndoActionCreators } from 'redux-undo';

import AddTaskPanel from './AddTaskPanel';

let ButtonsPanel = ({ canUndo, canRedo, onUndo, onRedo }) => {

  return (
    <>
      <AddTaskPanel />
      <div>
        <button disabled={!canUndo} 
                onClick={onUndo}>
              UNDO
        </button>
        <button disabled={!canRedo} 
                onClick={onRedo}>
              REDO
        </button>
      </div>
    </>
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

ButtonsPanel = connect( mapStateToProps, mapDispatchToProps )(ButtonsPanel);

export default ButtonsPanel;