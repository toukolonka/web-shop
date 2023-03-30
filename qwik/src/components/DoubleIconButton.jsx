import { component$ } from '@builder.io/qwik';
import classNames from 'classnames';

export default component$((props) => {
  return (
    <div class='inline'>
      <button
        class={classNames('btn w-10 inline-flex justify-center', props.leftButtonClassNames)}
        preventdefault:click 
        onClick$={props.handleLeftClick}
        disabled={props.leftButtonDisabled}
        data-testid="leftButton"
      >
        {props.leftIcon}
      </button>
      <div class={classNames('inline-flex w-12 justify-center', props.textClassNames)}>{props.count}</div>
      <button
        class={classNames('btn w-10 inline-flex justify-center', props.rightButtonClassNames)}
        preventdefault:click 
        onClick$={props.handleRightClick}
        disabled={props.rightButtonDisabled}
        data-testid="rightButton"
      >
        {props.rightIcon}
      </button>
    </div>
  );
});
