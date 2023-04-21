import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';

function CustomLink({ href, children, dataTestId, ...props }) {
  return (
    <Link
      href={href}
      data-testid={dataTestId}
      {...props}
      className={classNames('block py-2 pr-4 hover:scale-110 text-gray-700')}
    >
      {children}
    </Link>
  );
}

export default CustomLink;