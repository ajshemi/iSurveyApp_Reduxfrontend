export const saveUserToState = (user) => {
    return {
      type: "SAVE_USER_TO_STATE",
      user
    }
  }

 export const clearUserFromState = () => {
   console.log('here')
    return {
      type: "CLEAR_USER_FROM_STATE"
  }
}
  
  
  export const addProductsToState = (products) => {
    return {
      type: "ADD_PRODUCTS",
      products
    }
  }

  export const clearProductsFromState = () => {
    console.log('here products')
     return {
       type: "CLEAR_PRODUCTS_FROM_STATE"
   }
 }
  


  export const addCommentToState = (comment) => {
    return {
      type: "ADD_COMMENT",
      comment
    }
  }

  export const addAllCommentsToState = (comments) => {
    return {
      type: "ADD_ALL_COMMENTS",
      comments
    }
  }

  export const deleteCommentFromState=(comment) => {
    return {
      type:"DELETE_COMMENT",
      comment
    }
    
  }

  export const updateRatingToState = (review) => {
    return {
      type: "UPDATE_USER_RATING",
      review
    }
  }