import React from 'react';
import { Card,Image } from 'semantic-ui-react'
// import ReviewContainer from './ReviewContainer'
// import ReviewInput from './ReviewInput'

const Product = (props) => {
    console.log(props)
    let arrayOfIngredients=props.product.ingredients.map((ingredient,i)=> <li key={`${i}|${ingredient}`}>{ingredient}</li> )

  return(
    <div>
    <Card>
        <Image src='/cookie-imgs/banana-oatmeal-raisin-cookies-9996 copy 2.jpg'  wrapped ui={false} />
        <Card.Content>
        <Card.Header>{`${props.product.name} |${props.product.id}`}</Card.Header>
        {/* <Card.Meta>Joined in 2016</Card.Meta> */}
            <Card.Description>
              
       
            <ul>{arrayOfIngredients}</ul>
            </Card.Description>
            {props.user ? `Your Rating ${props.product.rating}` : ''}
        </Card.Content>

    </Card>   
    {/* <ReviewContainer/> */}
    {/* <ReviewInput/> */}
    </div>
  )
};

export default Product