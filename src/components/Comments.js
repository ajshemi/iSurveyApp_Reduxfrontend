import React, { Component } from 'react';
// import {connect} from 'react-redux'
// import {deleteCommentFromState} from '../Redux/actions'
import Comment from './Comment'

class Comments extends Component {

    render() {
        
        let arrayOfComments=this.props.user.comments.map(comment=> <Comment key={comment.id} comment={comment}/>)
        // console.log(this.props.user.comment)
        // console.log(this.props.user.comment.id)
        // const {id,user_comment}=this.props.user.comment
        // {user_comment}
        return (
            <ul>
                {arrayOfComments}
            </ul>
        );
    }
}

export default Comments;