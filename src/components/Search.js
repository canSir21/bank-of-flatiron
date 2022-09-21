import React from 'react';

function Search(props) {
  return (
    <div className='ui large fluid icon input'>
      <input
        type='text'
        placeholder='Search your Recent Transactions'
        onChange={(e) =>
          props.setSearchData({ ...props.searchData, text: e.target.value })
        }
      />
      <i className='circular search link icon' onClick={props.handleSearch}></i>
    </div>
  );
}

export default Search;
