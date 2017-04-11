const search_reducer = (state = '', action) => {
  switch(action.type){
    case 'SET_QUERY':
      return state.result
    default:
      return state
  }
}
