import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Item() {
  const [item, setItem] = useState(null);
  const id = useParams().id;

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:3001/api/items/${id}`);
      const data = await response.json();
      setItem(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>Item</h1>
      { item && <h2>{item.name}</h2>}
    </>
  );
}

export default Item;