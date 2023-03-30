import { Slot, component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import classNames from 'classnames';

export default component$(({ href, dataTestId }) => {
  const pathname = useLocation().url.pathname;
  const isActive = href !== '/' && pathname.startsWith(href) || pathname === href;

  return (
    <a
      href={href}
      data-testid={dataTestId}
      class={classNames('block py-2 pr-4 hover:scale-110', { 'text-blue-700': isActive }, { 'text-gray-700': !isActive })}
    >
      <Slot />
    </a>
  );
});