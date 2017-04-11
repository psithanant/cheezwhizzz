const substituteResultReducer = (state = [], action) => {
  switch (action.type) {
    case 'SEE_SUBSTITUTES':
      return action.payload
    default:
      return state
  }
}

export default substituteResultReducer
