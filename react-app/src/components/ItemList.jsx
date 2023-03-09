import React from 'react';
import { Link } from 'react-router-dom';
import ItemCard from './ItemCard';

function ItemList(props) {
  return (
    <>
      {props.items.map(item =>
        <Link to={`/items/${item.id}`} key={item.id}>
          <ItemCard item={item} />
        </Link>
      )}
    </>
  );
}

export default ItemList;