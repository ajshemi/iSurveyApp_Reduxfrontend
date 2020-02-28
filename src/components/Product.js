import React,{Component} from 'react';
import { Modal,Button,Card,Image } from 'semantic-ui-react'
import PopupForm from './PopupForm'
import { render } from '@testing-library/react';
// import ReviewContainer from './ReviewContainer'
// import ReviewInput from './ReviewInput'




class Product extends Component {

    state = { 
      open: false
    }

    show = () => this.setState({ open: true })
    close = () => this.setState({ open: false })
    // console.log(this.props)
    
    handleDeleteClick=(e) => {
      this.props.handleDeleteReview(this.props.product.review_id)
      // console.log(props.user.username)
      // console.log(props.product)
    }


    // renderRatingForm=(e) => {
    //   return(<div>
    //    <PopupForm/> 
    //    <ModalExampleSize open='true'/>
    //   </div>)
    // }
    // const handleUpdateClick=(e) => {
  
    //     props.handleUpdateReview(props.product.review_id)

    //   // console.log(props.user.username)
    //   // console.log(props.product)
    // }
  render(){
    let arrayOfIngredients=this.props.product.ingredients.map((ingredient,i)=> <li key={`${i}|${ingredient}`}>{ingredient}</li> )


  return(
    <div>
    <Card>
        {/* <Image src='/cookie-imgs/banana-oatmeal-raisin-cookies-9996 copy 2.jpg'  wrapped ui={false} /> */}
        <Card.Content>
        <Card.Header>{`|${this.props.product.name}`}</Card.Header>
        {/* <Card.Meta>Joined in 2016</Card.Meta> */}
            <Card.Description>
            <ul>{arrayOfIngredients}</ul>
            </Card.Description>
            <h2>{this.props.user ? `Your Rating is ${this.props.product.rating}` : ''}</h2>
            <div>
            {this.props.user ? <Button onClick={this.show/*handleUpdateClick*/} className="ui button blue">Update</Button> : ''}
            {this.props.user ? <button onClick={this.handleDeleteClick} className="ui button red">Delete</button> : ''}
            {/* <button class="ui secondary button">Secondary</button> */}
            </div>
        </Card.Content>
        {/* <button onClick={handleDeleteClick} className="ui button red">Delete</button> */}

    </Card> 
    <Modal size='mini' open={this.state.open} onClose={this.close}>
          <Modal.Header>Update Your Rating</Modal.Header>
          <Modal.Content>
            <p>Go head Adjust your rating for this product</p>
          </Modal.Content>
          <Modal.Actions>
            <PopupForm product={this.props.product}/>
            {/* <Button negative>No</Button>
            <Button
              positive
              icon='checkmark'
              labelPosition='right'
              content='Yes'
            /> */}
          </Modal.Actions>
        </Modal>  
    {/* <ReviewContainer/> */}
    {/* <ReviewInput/> */}
    </div>
  )
}
};

export default Product





// import React, { Component } from 'react'
// import { Button, Modal } from 'semantic-ui-react'

// class ModalExampleSize extends Component {
//   state = { open: false }

//   show = (size) => () => this.setState({ size, open: true })
//   close = () => this.setState({ open: false })

//   render() {
//     const { open, size } = this.state

//     return (
//       <div>
//         <Button onClick={this.show('mini')}>Mini</Button>

//         <Modal size={size} open={open} onClose={this.close}>
//           <Modal.Header>Delete Your Account</Modal.Header>
//           <Modal.Content>
//             <p>Are you sure you want to delete your account</p>
//           </Modal.Content>
//           <Modal.Actions>
//             <Button negative>No</Button>
//             <Button
//               positive
//               icon='checkmark'
//               labelPosition='right'
//               content='Yes'
//             />
//           </Modal.Actions>
//         </Modal>
//       </div>
//     )
//   }
// }

// export default ModalExampleSize
