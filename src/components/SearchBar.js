import React from 'react';

const SearchBar = () => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={null} onChange={null}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="CharacterCount" checked={null} onChange={null}/>
        CharacterCount
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={null}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;