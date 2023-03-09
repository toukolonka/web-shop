import React, { useState, useEffect } from 'react';
import ItemList from '../components/ItemList';

function Items() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:3001/api/items');
      const data = await response.json();
      setItems(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>Items</h1>
      <ItemList items={items} />
    </>
  );
}

export default Items;