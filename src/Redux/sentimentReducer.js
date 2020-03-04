
const initialState = {
    sentiments: []
  }
  const sentimentReducer = (state = initialState, action) => {
    switch (action.type) {
  
      case "ADD_SENTIMENT":
        console.log('add sentiment')
        // console.log(action.sentiment)
        return {...state, sentiments: state.sentiments.concat(action.sentiment)}


      case "ADD_ALL_SENTIMENTS": 
      return {...state,sentiments:action.sentiments}

      case "CLEAR_SENTIMENT_FROM_STATE":
          return {}

      default:
        return state;
    }
  }
  export default sentimentReducer