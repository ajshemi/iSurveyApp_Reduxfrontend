
import React from 'react'
import Product from './Product'
import {connect} from 'react-redux'
import { Card } from 'semantic-ui-react'

class ProductContainer extends React.Component {

  render() {
    let arrayOfProducts = this.props?.products?.map(product => <Product key={product.id} product={product}/>)
    return (
      <Card.Group itemsPerRow={3}>
        { arrayOfProducts }
      </Card.Group>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products.products
    // user: state.user
  }
}

export default connect(mapStateToProps)(ProductContainer);