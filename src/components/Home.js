import React, {Component} from 'react';
import {connect} from 'react-redux'
import {clearUserFromState,clearProductsFromState,clearSentimentFromState,clearallCommentsFromState,clearallEmotionsFromState } from '../Redux/actions'

class Home extends Component  {
  handleLogout=(props) => {
    localStorage.clear()
    this.props.clearUserFromState()
    // this.props.clearProductsFromState()
    // this.props.clearallCommentsFromState()
    this.props.clearSentimentFromState() 
    this.props.clearallEmotionsFromState()
  }
  render(){
  return (
    <div>
    <h1 style={{color:'blue',textDecoration:'underline'}} id="header">COOKIES</h1>
    <h1 onClick={this.handleLogout}>logout</h1>
    {/* <img src='/cookie-imgs/pexels-photo-2074122 copy.jpeg' alt="cookie photo" /> */}
      
    </div>
  );
};
}

export default connect(null,{clearUserFromState,clearProductsFromState,clearSentimentFromState,clearallCommentsFromState,clearallEmotionsFromState})(Home);