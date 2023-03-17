import React from 'react';
import { Link } from 'react-router-dom';

function HomePageItem(props) {
  return (
    <Link
      className='flex xs:h-48 items-center mx-2 mb-4 p-6 border rounded-lg shadow bg-gray-800 border-gray-700 hover:bg-gray-700'
      to={props.to}
      data-testid={props.dataTestid}
    >
      <strong className="mb-2 mx-auto text-2xl font-bold tracking-tight text-white">{props.name}</strong>
    </Link>
  );
}

export default HomePageItem;