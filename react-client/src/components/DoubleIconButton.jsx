import React from 'react';
import classNames from 'classnames';

function DoubleIconButton(props) {
  return (
    <div className='inline'>
      <button
        className={classNames('btn', 'inline', props.leftButtonClassNames)}
        onClick={props.handleLeftClick}
        disabled={props.leftButtonDisabled}
      >
        {props.leftIcon}
      </button>
      <div className='inline-flex w-12 justify-center'>{props.count}</div>
      <button
        className={classNames('btn', 'inline', props.rightButtonClassNames)}
        onClick={props.handleRightClick}
        disabled={props.rightButtonDisabled}
      >
        {props.rightIcon}
      </button>
    </div>
  );
}

export default DoubleIconButton;