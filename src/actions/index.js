import axios from 'axios';
export const searchDistance = (event) =>{
  console.log('did i ever run this searchDistance action');
  return {
    type: "STORE_DISTANCE",
    text: event
  }
}

export const SearchZipCode = (number) =>{
  console.log('what is TYPING,',number);
  return {
    type: "STORE_ZIPCODE",
    zipcode: number
  }
}

function fetchSearchTopStories(zipCode, range) {
console.log('what is ');
    return axios.get(`http://cheeswhiz.herokuapp.com/api/findcheese/${zipCode}/${range}`)
    .then(response => {
        console.log(  "what is response now", response.data );
        return response.data
    })
};

export const doSearch = (zipCode, range) => {
    // console.log('can prop get here', this.props);
    return {
        type: 'DO_SEARCH',
        payload: fetchSearchTopStories(zipCode, range)
    }
}

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

  return axios.get(`http://cheeswhiz.herokuapp.com/api/cheese/specific/${cheeseName}`)
}


export const registerUser = (data) => {
  return {
    type: 'SIGN_UP',
    payload: fetchCheeseRegisterApi(data)
  }
}

function fetchCheeseRegisterApi(data) {
  return axios.post(`http://cheeswhiz.herokuapp.com/api/user/register`, data)
    .then(result => console.log('this is res', result))
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
