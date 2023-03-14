import React from 'react';
import SearchInput from './SearchInput';

function Search(props) {
  return (
    <div className='flex mx-2'>
      <SearchInput searchValue={props.searchValue} setSearchValue={props.setSearchValue}/>
    </div>
  );
}

export default Search;