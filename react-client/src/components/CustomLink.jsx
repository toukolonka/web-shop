import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

function CustomLink({ to, children, dataTestId, ...props }) {
  const location = useLocation();
  const isActive = to !== '/' && location.pathname.startsWith(to) || location.pathname === to;

  return (
    <Link
      to={to}
      data-testid={dataTestId}
      {...props}
      className={classNames('block', 'py-2', 'pr-4', 'hover:scale-110', { 'text-blue-700': isActive }, { 'text-gray-700': !isActive })}
    >
      {children}
    </Link>
  );
}

export default CustomLink;