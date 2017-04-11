export const setNavQuery = (text) => {
  return {
    type: 'SET_NAV_QUERY',
    text
  }
}

export const setCheeseResult = (cheeseName) => {
  return {
    type: 'SET_NAV_RESULT',
    payload: fetchCheeseByName(cheeseName)
  }
}

function fetchCheeseByName(cheeseName) {
  console.log('i am here');
  fetch(`http://cheeswhiz.herokuapp.com/api/cheese/specific/${cheeseName}`)
  .then(response => response.json())
  .then(result => console.log(result) )
  .catch(err => console.log('oh nooo!'))
}

export const setSubstituteQuery = (text) => {
  return {
    type: 'SET_SUBSTITUTE_QUERY',
    text
  }
}

export const seeSubstitutes = (cheeseName) => {
  return {
    type: 'SEE_SUBSTITUTES',
    payload: fetchSubstitutes(cheeseName)
  }
}

function fetchSubstitutes(cheeseName) {
  return fetch(`http://cheeswhiz.herokuapp.com/api/cheese/substitute/${cheeseName}`)
    .then(res => res.json())
}
