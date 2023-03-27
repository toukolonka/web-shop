import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

function CustomLink({ href, children, dataTestId, ...props }) {
  const pathname = usePathname();
  const isActive = href !== '/' && pathname.startsWith(href) || pathname === href;

  return (
    <Link
      href={href}
      data-testid={dataTestId}
      {...props}
      className={classNames('block py-2 pr-4 hover:scale-110', { 'text-blue-700': isActive }, { 'text-gray-700': !isActive })}
    >
      {children}
    </Link>
  );
}

export default CustomLink;