import { Slot, component$ } from '@builder.io/qwik';
import classNames from 'classnames';

export default component$(({ href, dataTestId }) => {
  return (
    <a
      href={href}
      data-testid={dataTestId}
      class={classNames('block py-2 pr-4 hover:scale-110 text-gray-700')}
    >
      <Slot />
    </a>
  );
});