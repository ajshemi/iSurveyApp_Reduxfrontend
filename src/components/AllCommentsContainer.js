import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Container} from 'semantic-ui-react'
import SearchBarContainer from './SearchBarContainer';
import CommentCollection from './CommentCollection'
import {addAllCommentsToState} from '../Redux/actions'
// import {deleteCommentFromState} from '../Redux/actions'
// import Comment from './Comment'

class AllCommentsContainer extends Component {
    state = {
        searchTerm: "",
        sortValue:"All"
    }

    handleInput=(e) => {
        console.log(e)
        this.setState((prevState) => {return {...prevState, searchTerm:e}})
    }
    handleSort = (newSortValue) => {
        console.log(newSortValue)
        this.setState({
          sortValue: newSortValue
        })
      }

    sortComments = () => {
        let {sortValue} = this.state
    
        if(sortValue === "Name"){
          return [...this.props.comments].sort((hogA, hogB) => {
            return hogA.user_comment.user_id.localeCompare(hogB.user_comment.user_id)
          }
          )
        } else if (sortValue === "length"){
          return [...this.props.comments].sort((hogA, hogB) => {
            return hogA.user_comment.length - hogB.user_comment.length
          })
        }else if(sortValue==="user"){
            return [...this.props.comments].sort((hogA, hogB) => {
                return hogA.user_comment.user_id - hogB.user_comment.user_id
        })

        }
         else {
          return [...this.props.comments]
        }
    }

    
    //decide what to pass down to CommentCollection
    filteredComments= (comments) => {
        let filteredComments = comments.filter(comment => comment.user_comment.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
        return filteredComments
    }
    

    render() {
       // let arrayOfComments=this.props.comments.map(comment=> <Comment key={comment.id} comment={comment}/>)
        // console.log(this.props.user.comment)
        // console.log(this.props.user.comment.id)
        // const {id,user_comment}=this.props.user.comment
        // {user_comment}
        return (
            <Container>
                <SearchBarContainer searchTerm={this.state.searchTerm} handleInput={this.handleInput} handleSort={this.handleSort}/>
                <br/>
                <CommentCollection comments={this.filteredComments(this.sortComments())}/>
            </Container>
        );
    }
}

const mapStateToProps=(state) => {
    return{
        comments:state.comments.allcomments
    }
}

export default connect(mapStateToProps,{addAllCommentsToState})(AllCommentsContainer);