import React from 'react';

function SearchInput(props) {
  return (
    <input
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:border-blue-500 inline-block p-2.5 mr-2 flex-grow"
      type="text"
      placeholder="Search"
      value={props.searchValue}
      onChange={(event) => props.setSearchValue(event.target.value)}
    />
  );
}

export default SearchInput;