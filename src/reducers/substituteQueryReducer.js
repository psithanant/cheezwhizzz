const queryReducer = (state = '', action) => {
  switch (action.type) {
    case 'SEE_SUBSTITUTES_FULFILLED':
      return action.payload;
    default:
      return state;
  }
}

export default queryReducer
