import React from 'react';

function FilterInput(props) {
  return (
    <input
      className="input flex-grow inline-block mr-2"
      type="number"
      placeholder={props.placeholder}
      value={props.value}
      onChange={(event) => props.setFilterValue(event.target.value)}
    />
  );
}

export default FilterInput;