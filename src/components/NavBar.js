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
   { !props.user?  <li>
        <NavLink to="/login">Login</NavLink>
      </li> : ""}
      { !props.user ? <li>
        <NavLink to="/register">Register</NavLink>
      </li> : ""
      }
      <li>
        <NavLink to="/products">Products</NavLink>
      </li>
      <li>
        <NavLink to="/rating">UserRating</NavLink>
      </li>
      <li>
        <NavLink to="/allcomments">AllComments</NavLink>
      </li>
    </ul>
  )
};
const mapStateToProps =(state) => {
  return {
    user:state.user.user
  }
}
export default connect(mapStateToProps)(NavBar);