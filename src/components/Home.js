import React, {Component} from 'react';
import {connect} from 'react-redux'
import {clearUserFromState} from '../Redux/actions'

class Home extends Component  {
  handleLogout=(props) => {
    this.props.clearUserFromState()
    localStorage.clear()
  }
  render(){
  return (
    <div>
    <h1 id="header">COOKIES</h1>
    <h1 onClick={this.handleLogout}>logout</h1>
    <img src='/cookie-imgs/pexels-photo-2074122 copy.jpeg' alt="cookie photo" />
      
    </div>
  );
};
}

export default connect(null,{clearUserFromState})(Home);