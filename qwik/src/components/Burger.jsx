import { component$ } from '@builder.io/qwik';
import classNames from 'classnames';

export default component$((props) => {
  return(
    <div class="space-y-1.5 cursor-pointer" onClick$={() => props.isOpen.value = !props.isOpen.value}>
      <div class={classNames('w-8 h-1 bg-gray-700', { 'rotate-45 translate-y-[0.35em]': props.isOpen.value })}></div>
      <div class={classNames('w-8 h-1 bg-gray-700', { 'hidden': props.isOpen.value })}></div>
      <div class={classNames('w-8 h-1 bg-gray-700', { '-rotate-45 -translate-y-[0.35em]': props.isOpen.value })}></div>
    </div>
  );
});
