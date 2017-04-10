
const navQuery = (state = "", action) => {
  switch (action.type) {
    case 'SET_NAV_QUERY':
      return action.text;
    default:
      return state
  }
}

export default navQuery
