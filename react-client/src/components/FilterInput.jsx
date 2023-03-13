import React from 'react';

function FilterInput(props) {
  return (
    <input
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:border-blue-500 inline-block p-2.5 mr-2 flex-grow"
      type="number"
      placeholder={props.placeholder}
      value={props.value}
      onChange={(event) => props.setFilterValue(event.target.value)}
    />
  );
}

export default FilterInput;