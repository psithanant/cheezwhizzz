//query reducer.
import initialState from './initialState';

const page_reducer = (state = 0, action) => {
  switch (action.type) {
    case 'MORE_FULFILLED':
    // console.log('what is action?', action);
    // console.log('what is state2',{...state, query: action.text} );
      return action.payload;
    default:
      return state
  }
}

export default page_reducer
