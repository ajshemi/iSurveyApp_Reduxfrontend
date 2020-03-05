
import React from 'react'
import Product from './Product'
import {Switch, Route} from 'react-router'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { Card } from 'semantic-ui-react'

class ProductContainer extends React.Component {
  renderProduct=(routerProps) => {
    let matchProduct=parseInt(routerProps.match.params.id)
    console.log(matchProduct)
    let foundProduct=this.props.products.find(product=>product.id===matchProduct)
    if(foundProduct){
      return <Product key={foundProduct.id} product={foundProduct}/> 
    }
    else{
      return <p>NOT FOUND</p>
    }
    
  }

  render() {
    let productlinks=this.props?.products?.map((product,index)=><li key={`${product.id}-${index}`} ><Link to={`/products/${product.id}`}>{product.name}</Link></li>)
    let arrayOfProducts = this.props?.products?.map(product => <Product key={product.id} product={product}/>)
    return (
      <div>
        {/* <Card.Group itemsPerRow={3}>
          { arrayOfProducts }
        </Card.Group> */}
        <ol>
          {productlinks}
        </ol>
        <Switch>
         <Route path="/products/:id" render={this.renderProduct}/>
         <Route path="/products/" render={ () => <p>click on a product</p> } />
        </Switch>
      </div>
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