import React, { Component } from 'react';
import {connect} from 'react-redux'
import {updateRatingToState,saveUserToState} from '../Redux/actions'
import { Rating} from 'semantic-ui-react'

class NewProductRatingForm extends Component {
  //local component state
  state = {
    // snack_id: 0,
    product_id:0,
    rating:0
  }

  handleSubmit = (e) => {
    e.preventDefault()
    //once set, send the new state to database
    console.log(this.state)
    if (this.state.product_id > 0 && this.state.rating >0) {

      fetch("http://localhost:3000/reviews", {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          'content-type': "application/json",
          "Authorization": `bearer ${this.props.token}`
        }
      })
      .then(res => res.json())
      .then((review) => {
        console.log(review)
        this.props.saveUserToState(review)
      })

      // fetch(`http://localhost:3000/users/${this.props.user.id}`)
      //   .then(res => res.json())
      //   .then((resp) => {
      //       this.props.saveUserToState(resp)
      //   })
      this.setState((prevState) => {
        
        
      })
    }
  }

  //set local component state
  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value
    }
    ,()=>console.log(this.state)
    )
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Product/Cookie Name:</label>
        <select name="product_id" onChange={this.handleChange} value={this.state.product_id}>
          {this.props.products.map(product => {
            return <option key={product.id} value={product.id}>{product.name}</option>
          })}
        </select>
        
        <div>
            <div>Rating: {this.state.rating}</div>
            <input
            type='range'
            min={0}
            max={5}
            name='rating'
            value={this.state.rating}
            onChange={this.handleChange}
            />
            <br />
            <Rating rating={this.state.rating} maxRating={5} />
        </div>
        <input type="submit" value="Add Product/Rating" />
      </form>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
    token: state.user.token
  }
}







export default connect(mapStateToProps, {updateRatingToState,saveUserToState} )(NewProductRatingForm);