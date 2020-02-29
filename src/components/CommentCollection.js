import React, { Component } from 'react';
// import {connect} from 'react-redux'
// import {deleteCommentFromState} from '../Redux/actions'
import Comment from './Comment'

class CommentCollection extends Component {
    render() {
        console.log(this.props.comments)
        let arrayOfComments=this.props.comments.map(comment=> <Comment key={comment.id} comment={comment}/>)
        // console.log(this.props.user.comment)
        // console.log(this.props.user.comment.id)
        // const {id,user_comment}=this.props.user.comment
        // {user_comment}
        return (
            <ul>
                {/* arrayofallcomments */}
                {arrayOfComments}
            </ul>
        );
    }
}
export default CommentCollection