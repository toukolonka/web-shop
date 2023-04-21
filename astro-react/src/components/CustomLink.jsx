import React from 'react';
import classNames from 'classnames';

function CustomLink({ href, children, dataTestId, ...props }) {
  return (
    <a
      href={href}
      data-testid={dataTestId}
      {...props}
      className={classNames('block py-2 pr-4 hover:scale-110 text-gray-700')}
    >
      {children}
    </a>
  );
}

export default CustomLink;