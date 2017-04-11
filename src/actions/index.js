import axios from 'axios';


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
  // console.log('i am here');
  // fetch(`http://cheeswhiz.herokuapp.com/api/cheese/specific/${cheeseName}`)
  //   .then(function(res) { return res.json(); })
  // .then(result => {console.log('this is res', result)} )
  // .catch(err => console.log('oh nooo!'))
  return axios.get(`http://cheeswhiz.herokuapp.com/api/cheese/specific/${cheeseName}`)
}
//
// export const doSearch = (text, page) => {
//   return {
//     type: "DO_SEARCH",
//     payload:
//   }
// }
