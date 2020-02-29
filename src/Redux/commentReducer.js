
const initialState = {
    allcomments: []
  }
  const commentReducer = (state = initialState, action) => {
    switch (action.type) {
  
      case "ADD_ALL_COMMENTS":
        console.log('add all comments')
        return {...state, allcomments: action.comments}
  
      default:
        return state;
    }
  }
  export default commentReducer