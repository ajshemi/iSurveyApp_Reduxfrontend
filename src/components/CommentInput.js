import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addCommentToState} from '../Redux/actions'

class CommentInput extends Component {
  //local component state
  state = {
    user_comment:''
  }

  handleSubmit = (e) => {
    //fetch with the new set state 
    e.preventDefault()
    // console.log(this.state)
    // console.log(this.props)
    let token = localStorage.getItem('token')
    console.log(token)
    fetch("http://localhost:3000/comments",{
        method: "POST",
        body:JSON.stringify(this.state),
        // body: JSON.stringify({user_comment:this.state.comment,user_id:this.props.user.id}),
        headers: {
          'content-type': "application/json",
          "Authorization": `bearer ${token}`
        }
      })
      .then(res => res.json())
      .then((comment) => {
        console.log(comment)
        this.props.addCommentToState(comment)
      })
    // dispatch add comment action with the comment response from the database
    // the reducer will update the application state with this action
    //clear this.state.comment
    this.setState((prevState) => {
      return { ...prevState,user_comment:''}
      
    })
  }

  handleChange = (e) => {
    //set this component state "local state"
    let {name, value} = e.target
    this.setState({
      [name]: value
    },()=>console.log(this.state.user_comment))
  }

  render() {
    // console.log(this.props.user.comment)
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="comment">Overall Comment:</label>
        <input type="text" autoComplete="off" name="user_comment" value={this.state.user_comment} onChange={this.handleChange}/>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

export default connect(null,{addCommentToState})(CommentInput);