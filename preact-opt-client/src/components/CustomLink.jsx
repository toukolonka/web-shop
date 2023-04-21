import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

function CustomLink({ to, children, dataTestId, ...props }) {
  return (
    <Link
      to={to}
      data-testid={dataTestId}
      {...props}
      className={classNames('block', 'py-2', 'pr-4', 'hover:scale-110 text-gray-700')}
    >
      {children}
    </Link>
  );
}

export default CustomLink;