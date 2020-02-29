import React, { Component } from 'react';
class Filter extends Component {
    render() { 
        return (
      <div>
            <strong>Filter by:</strong>
            <label>
                <input type="radio" value="Alphabetically" checked={null} onChange={null}/>
                Alphabetically
            </label>
            <label>
                <input type="radio" value="CharacterCount" checked={null} onChange={null}/>
                CharacterCount
            </label>
      </div>
        );
    }
}
 
export default Filter;