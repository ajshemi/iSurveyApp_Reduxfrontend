
const initialState = {
    allcomments: []
  }
  const commentReducer = (state = initialState, action) => {
    switch (action.type) {
  
      case "ADD_ALL_COMMENTS":
        console.log('add all comments')
        return {...state, allcomments: action.comments}

      case "CLEAR_ALL_COMMENTS_FROM_STATE":
        return {}

      case "ADD_COMMENT_TO_COMMENTS":
        return {...state, allcomments: state.allcomments.concat(action.comment)}
  


      default:
        return state;
    }
  }
  export default commentReducer