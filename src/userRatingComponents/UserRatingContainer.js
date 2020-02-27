import React, { Component } from 'react';
import Product from '../components/Product'
import {connect} from 'react-redux'
import { Card} from 'semantic-ui-react'
import CommentInput from '../components/CommentInput'
import Comments from '../components/Comments'
import NewProductRatingForm from './NewProductRatingForm'



class UserRatingContainer extends Component {
  render() {
    //pass the app state as this.props.user

    let {user} = this.props
    console.log(user)
    return (
      <div>
        <h2>{`Welcome,${user.username}!`}</h2>
        <h3>Products</h3>
        <Card.Group itemsPerRow={3}>
          {user.user_ratings.map(product => <Product key={product.review_id} product={product} user={user} />)}
        </Card.Group>
        <br />
        <br />
        <NewProductRatingForm user={this.props.user}/>
        <br />
        <br />
        <CommentInput />
        <Comments user={this.props.user}/>
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