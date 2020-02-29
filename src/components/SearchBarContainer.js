import React, { Component } from 'react'
import Filter from './Filter'
import Sort from './Sort'
import Search from './Search'
// import {Container} from 'semantic-ui-react'



const SearchBarContainer = (props) => {
  return (
    <div>
      <Filter /*handleFilter={props.handleFilter}*//>
      <br/>
      <span><Sort handleSort={props.handleSort}/></span>
      <br/>
      <Search handleInput={props.handleInput} searchTerm={props.searchTerm}/*handleSearch={props.handleSearch}*//>
      <br/>
    </div>
  );
}
export default SearchBarContainer;