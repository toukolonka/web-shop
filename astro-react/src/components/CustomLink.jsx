import React from 'react';
import classNames from 'classnames';

function CustomLink({ href, children, dataTestId, pathname, ...props }) {
  const isActive = href !== '/' && pathname.startsWith(href) || pathname === href;

  return (
    <a
      href={href}
      data-testid={dataTestId}
      {...props}
      className={classNames('block py-2 pr-4 hover:scale-110', { 'text-blue-700': isActive }, { 'text-gray-700': !isActive })}
    >
      {children}
    </a>
  );
}

export default CustomLink;