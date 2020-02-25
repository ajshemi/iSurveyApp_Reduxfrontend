import React, { Component } from 'react';
import Product from '../components/Product'
import {connect} from 'react-redux'
import { Card} from 'semantic-ui-react'
import CommentInput from '../components/CommentInput'
import Comment from '../components/Comment'
import NewProductRatingForm from './NewProductRatingForm'



class UserRatingContainer extends Component {
  render() {
    let {user} = this.props
    return (
      <div>
        <h2>{`Welcome,${user.username}!`}</h2>
        <h3>Products</h3>
        <Card.Group itemsPerRow={3}>
          {user.user_ratings.map(product => <Product key={product.review_id} product={product} />)}
        </Card.Group>
        <br />
        <br />
        <NewProductRatingForm />
        <br />
        <br />
        <CommentInput user={this.props.user}/>
        <Comment user={this.props.user}/>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user.user
  }
}
export default connect(mapStateToProps)(UserRatingContainer);
//