const INITIAL_STATE = [{name: 'hi'}]

const navResult = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case 'SET_NAV_RESULT_FULFILLED':
      return action.payload
    default:
      return state
  }
}

export default navResult
