const navResult = (state = [], action) => {
  switch (action.type) {
    case 'SET_NAV_RESULT':
      return action.payload
    default:
      return state
  }
}

export default navResult
