
//put action creators here.
//and example might be:
import axios from 'axios';
// import * as CONST from '../constants';

function fetchSearchTopStories() {
console.log('i am in fetch function');
    return axios.get("http://cheeswhiz.herokuapp.com/api/findcheese/94588/3")
    .then(response => {
        console.log(  "what is response now", response.data );
        return response.data
    })
    //
    // return fetch("http://cheeswhiz.herokuapp.com/api/findcheese/94588/3")
    // .then(response => response.json())
    // .then(result => console.log(result) )
    // .catch(err => console.log('oh nooo!'))
};

export const doSearch = (text, page) => {
    // console.log('can prop get here', this.props);
    return {
        type: 'DO_SEARCH',
        payload: fetchSearchTopStories()
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
