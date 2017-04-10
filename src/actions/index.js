export const setQuery = (text) => {
  return {
    type: 'SET_QUERY',
    text
  }
}

export const setSubstituteQuery = (text) =>> {
  return {
    type: 'SET_SUBSTITUTE_QUERY',
    text
  }
}

export const doSearch = (text, page) => {
  return {
    type: "DO_SEARCH",
    payload:
  }
}

// export const seeSubstitutes = () => {
//   return {
//     type: 'SEE_SUBSTITUTES',
//     payload: fetchSubstitutes()
//   }
// }
//
// function fetchSubstitutes() {
//   return fetch('http://cheeswhiz.herokuapp.com/api/cheese/substitute/Brie')
//             .then(function(res) { return res.json(); })
// }
