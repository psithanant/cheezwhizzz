export const homeResultTableReducer = (state, action) {
  switch (action.type) {
    case 'SEARCH_FULFILLED':
      return action.payload
    default:
      return state;
  }
}
