import React, { Component } from 'react';
import {connect} from 'react-redux'
// import {deleteCommentFromState} from '../Redux/actions'
// import Comment from './Comment'

class AllCommentsContainer extends Component {

    render() {
        
        // let arrayOfComments=this.props.comments.map(comment=> <Comment key={comment.id} comment={comment}/>)
        // console.log(this.props.user.comment)
        // console.log(this.props.user.comment.id)
        // const {id,user_comment}=this.props.user.comment
        // {user_comment}
        return (
            <ul>
                AllCommentsContainer
                {/* {arrayOfComments} */}
            </ul>
        );
    }
}

export default AllCommentsContainer;