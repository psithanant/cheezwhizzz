//put action creators here.
//and example might be:
import axios from 'axios';
// import * as CONST from '../constants';

function fetchSearchTopStories(zipCode, mileage) {

    return axios.get("http://cheeswhiz.herokuapp.com/api/findcheese/94588/3")
    .then(response => {
        console.log(  "what is response now", response  );
        return response
    })
};

export const doSearch = (text, page) => {
    // console.log('can prop get here', this.props);
    return {
        type: 'DO_SEARCH',
        payload: fetchSearchTopStories(94588 , 3)
    }
}

//dispatching the DO_SEARCH action, will result in the following actions being
//dispatched from the redux promise middleware
//
// {
//   type: 'DO_SEARCH_PENDING'
// }
//
// {
//   type: 'DO_SEARCH_FULLFILLED',
//   payload: //promise resolution
// }
//
// {
//   type: 'DO_SEARCH_REJECTED'
//   payload: //promoise rejection
// }

// module.export = {
//   setQuery: setQuery,
//   doSearch: doSearch

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
//
// export const doSearch = (text, page) => {
//   return {
//     type: "DO_SEARCH",
//     payload:
//   }

// }
