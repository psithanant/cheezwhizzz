const signUp = (state = false, action) => {
  switch(action.type) {
    case 'SIGNUP_FULFILLED':
      return action.payload
    default:
      return state
  }
}

export default signUp
