import React, { memo } from 'react';
import Link from 'next/link';

function HomePageItem(props) {
  return (
    <Link
      className='flex xs:h-48 items-center mx-2 mb-4 p-6 border rounded-lg shadow bg-gray-800 border-gray-700 hover:bg-gray-700'
      href={props.href}
      data-testid={props.dataTestid}
    >
      <strong className="mb-2 mx-auto text-2xl font-bold tracking-tight text-white">{props.name}</strong>
    </Link>
  );
}

export default memo(HomePageItem);