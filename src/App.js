import React from 'react';
import {Switch, Route} from 'react-router'

import {withRouter} from 'react-router-dom'

import Form from './components/Form'
import NavBar from './components/NavBar'
import Home from './components/Home'
import ProductContainer from './components/ProductContainer'
import AllCommentsContainer from './components/AllCommentsContainer'
import UserRatingContainer from './userRatingComponents/UserRatingContainer'


import {connect} from 'react-redux'
import {addProductsToState,saveUserToState} from './Redux/actions'



class App extends React.Component {

  componentDidMount() {
    fetch("http://localhost:3000/products")
    .then(r => r.json())
    .then((products) => {
      this.props.addProductsToState(products);
    })

    if (localStorage.getItem("token")) {
      let token = localStorage.getItem('token')
      fetch("http://localhost:3000/persist", {
        headers: {
          "Authorization": `bearer ${token}`
        }
      })
      .then(r => r.json())
      .then(resp => {
        if (resp.token) {
          this.props.saveUserToState(resp);
        }
      })
    }
  }

  handleLoginSubmit = (user) => {

    fetch("http://localhost:3000/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "content-type": "application/json"
      }
    })
      .then(r => r.json())
      .then((resp) => {
        if (resp.token) {
          this.props.saveUserToState(resp);
          localStorage.setItem("token", resp.token)
        }
      })
  }

  handleRegisterSubmit = (user) => {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(
        user
      )
    })
    .then(r => r.json())
    .then(resp=> {
      if (resp.token) {
        console.log(resp)
        this.props.saveUserToState(resp);
      }
    })
  }
  renderForm = (routerProps) => {
    if(routerProps.location.pathname === "/login"){
      return <Form formName="Login Form" handleSubmit={this.handleLoginSubmit}/>
    } else if (routerProps.location.pathname === "/register") {
      return <Form formName="Register Form" handleSubmit={this.handleRegisterSubmit}/>
    }
  }


  render(){
    console.log(this.props);
    return (
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path="/login" render={ this.renderForm } />
          <Route path="/register" render={ this.renderForm } />
          <Route path="/products" component={ ProductContainer } />
          <Route path="/rating" component={ UserRatingContainer } />
          {/* <Route path="/logout" render={ this.renderLogout } /> */}
          <Route path="/allcomments" component={ AllCommentsContainer } /> 
          <Route path="/" exact render={() => <Home /> } />
          <Route render={ () => <p>Page not Found</p> } />
        </Switch>
      </div>
    );
  }

}
// const mapStateToProps=(state) => {
//   return{
//     user:state.user
//   }
// }

export default connect(null, {addProductsToState, saveUserToState})(withRouter(App));