import React, { Component } from 'react';
import Product from '../components/Product'
import {connect} from 'react-redux'
import { Card} from 'semantic-ui-react'
import CommentInput from '../components/CommentInput'
import Comments from '../components/Comments'
import NewProductRatingForm from './NewProductRatingForm'
import {saveUserToState} from '../Redux/actions'



class UserRatingContainer extends Component {
  //use the review_id to delete the review/rating/user association
  handleDeleteReview=(review_id) => {
    console.log(this.props.user)
    console.log(review_id)
    fetch(`http://localhost:3000/reviews/${review_id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `bearer ${this.props.token}`
      }
    })
    .then(res => res.json())
    .then((review) => {
      console.log(review)
      this.props.saveUserToState(review)
    }
    )
  }

  render() {
    //pass the app state as this.props.user
    let {user} = this.props
    console.log(user)
   if(user){return (
      <div>
        <h2>{user.username ? `Welcome ${user.username}` : "Please login"}</h2>
        <h3>{`You've Rated ${user.user_ratings.length < 1 ? 'No' : user.user_ratings.length } Product${user.user_ratings.length >1 ? 's':''}`}</h3>
        <Card.Group itemsPerRow={3}>
          {user.user_ratings.map(product => <Product handleDeleteReview={this.handleDeleteReview} key={product.review_id} product={product} user={user} />)}
        </Card.Group>
        <br />
        <br />
        <NewProductRatingForm user={this.props.user}/>
        <br />
        <br />
        <CommentInput />
        <Comments user={this.props.user}/>
      </div>
    )};
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    token:state.user.token
  }
}
export default connect(mapStateToProps,{saveUserToState})(UserRatingContainer);
