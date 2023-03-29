import React from 'react';
import classNames from 'classnames';

function DoubleIconButton(props) {
  return (
    <div className='inline'>
      <button
        className={classNames('btn w-10 inline-flex justify-center', props.leftButtonClassNames)}
        onClick={ (e) => {
          e.preventDefault();
          props.handleLeftClick();
        }}
        disabled={props.leftButtonDisabled}
        data-testid="leftButton"
      >
        {props.leftIcon}
      </button>
      <div className={classNames('inline-flex w-12 justify-center', props.textClassNames)}>{props.count}</div>
      <button
        className={classNames('btn w-10 inline-flex justify-center', props.rightButtonClassNames)}
        onClick={ (e) => {
          e.preventDefault();
          props.handleRightClick();
        }}
        disabled={props.rightButtonDisabled}
        data-testid="rightButton"
      >
        {props.rightIcon}
      </button>
    </div>
  );
}

export default DoubleIconButton;