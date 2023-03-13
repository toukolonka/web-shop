import React from 'react';

function SearchButton(props) {
  return (
    <button className='btn btn-blue' onClick={props.search}>
      Search
    </button>
  );
}

export default SearchButton;