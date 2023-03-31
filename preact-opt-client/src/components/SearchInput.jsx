import React, { memo } from 'react';

function SearchInput(props) {
  return (
    <input
      className="input flex-grow flex-shrink-0 w-full inline-block"
      type="text"
      placeholder="Search"
      value={props.searchValue}
      onChange={(event) => props.setSearchValue(event.target.value)}
      data-testid="searchButton"
    />
  );
}

export default memo(SearchInput);