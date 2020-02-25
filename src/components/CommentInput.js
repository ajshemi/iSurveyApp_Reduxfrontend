import React, { Component } from 'react';
import {connect} from 'react-redux'

import {addCommentToState} from '../Redux/actions'

class CommentInput extends Component {

  state = {
    user_comment:''
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
    console.log(this.props)
    // console.log(this.props.user.comment.id)
    let token = localStorage.getItem('token')
    // console.log(token)
    // "http://localhost:3000/reviews",
    fetch("http://localhost:3000/comments",{
        method: "POST",
        body:JSON.stringify(this.state),
        // body: JSON.stringify({user_comment:this.state.comment,user_id:this.props.user.id}),
        headers: {
          'content-type': "application/json",
          "Authorization": `bearer ${token}`
        }
      })
      .then(r => r.json())
      .then((comment) => {
        console.log(comment)
        this.props.addCommentToState(comment)
      })
    // this.props.handleAddComment(this.state)
  }

  handleChange = (e) => {
    // console.log(e.target.value)
    let {name, value} = e.target
    this.setState({
      [name]: value
    },()=>console.log(this.state.user_comment))
  }

  render() {
    console.log(this.props.user.comment)

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