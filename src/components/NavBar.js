import React from 'react';
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import userReducer from '../Redux/userReducer';

const NavBar = (props) => {
  return(
    <ul className="nav">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
    { !props.token?  <li>
        <NavLink to="/login">Login</NavLink>
      </li> : ""}
      { !props.token ? <li>
        <NavLink to="/register">Register</NavLink>
      </li> : ""
      }
      <li>
        <NavLink to="/products">Products</NavLink>
      </li>
        {props.token ?  <li>
        <NavLink to="/rating">UserRating</NavLink>
      </li> : ""}
      <li>
        <NavLink to="/allcomments">AllComments</NavLink>
      </li>
      {/* <li>
        <NavLink to="/usersentiment">UserSentiment</NavLink>
      </li> */}
      {/* <li>
        <NavLink to="/useremotions">UserEmotions</NavLink>
      </li> */}
      <li>
        <NavLink to="/charts">Charts</NavLink>
      </li>
    </ul>
  )
};
const mapStateToProps =(state) => {
  return {
    user:state.user.user,
    token:state.user.token
  }
}
export default connect(mapStateToProps)(NavBar);