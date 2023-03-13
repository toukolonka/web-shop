import React from 'react';
import FilterInput from './FilterInput';

function Filter(props) {
  return (
    <div className='flex mt-2 ml-2'>
      <FilterInput
        placeholder="Minimum price"
        value={props.minPrice}
        setFilterValue={props.setMinPrice}
      />
      <FilterInput
        placeholder="Maximum price"
        value={props.maxPrice}
        setFilterValue={props.setMaxPrice}
      />
    </div>
  );
}

export default Filter;