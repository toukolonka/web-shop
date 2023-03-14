import React from 'react';

function SearchInput(props) {
  return (
    <input
      className="input flex-grow inline-block"
      type="text"
      placeholder="Search"
      value={props.searchValue}
      onChange={(event) => props.setSearchValue(event.target.value)}
    />
  );
}

export default SearchInput;