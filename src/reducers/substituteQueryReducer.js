const substituteQueryReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SUBSTITUTE_QUERY':
      return action.text;
    default:
      return state;
  }
}

export default substituteQueryReducer
