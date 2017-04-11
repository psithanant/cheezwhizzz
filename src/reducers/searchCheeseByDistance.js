//query reducer.
// import initialState from './initialState';

const distance_reducer = (state = [], action) => {
  console.log("hello")
  switch (action.type) {
    // conole.log('what is action', action);
    case 'DO_SEARCH_FULFILLED':
      console.log("hello????????");
    case 'DO_SEARCH_REJECTED':
      console.log('what is action?', action);
    // console.log('what is state2',{...state, query: action.text} );
      return action.payload;
    default:
      return state
  }
}

export default distance_reducer
