function DoubleIconButton(props) {
  return (
    <div className='inline'>
      <button
        classList={{'btn w-10 inline-flex justify-center': true, [props.leftButtonClassNames]: true}}
        onClick={ (e) => {
          e.preventDefault();
          props.handleLeftClick();
        }}
        disabled={props.leftButtonDisabled}
        data-testid="leftButton"
      >
        {props.leftIcon}
      </button>
      <div classList={{'inline-flex w-12 justify-center': true, [props.textClassNames]: true}}>{props.count}</div>
      <button
        classList={{'btn w-10 inline-flex justify-center': true, [props.rightButtonClassNames]: true}}
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