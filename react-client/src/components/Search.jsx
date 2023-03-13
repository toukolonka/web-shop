import React from 'react';
import SearchButton from './SearchButton';
import SearchInput from './SearchInput';

function Search(props) {
  return (
    <div className='flex mx-2'>
      <SearchInput searchValue={props.searchValue} setSearchValue={props.setSearchValue}/>
      <SearchButton />
    </div>
  );
}

export default Search;