const INITIAL_STATE = [{}]

const navResult = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_NAV_RESULT_FULFILLED':
      return action.payload.data
    default:
      return state
  }
}

export default navResult
