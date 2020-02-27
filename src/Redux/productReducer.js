const initialState = {
    products: []
  }
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
  
      case "ADD_PRODUCTS":
        return {...state, products: action.products}

      case "ClEAR_USER_FROM_STATE":
        // let clearState=initialState
        return initialState
  
      default:
        return state;
    }
  }
  
  
  export default productReducer