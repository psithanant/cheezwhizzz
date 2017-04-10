//put action creators here.
//and example might be:
import axios from 'axios';
// import * as CONST from '../constants';

function fetchSearchTopStories(query, page = 0) {

    return axios.get("http://cheeswhiz.herokuapp.com/api/findcheese/94588/3")
    .then(response => {
        // console.log(  "what is response now", response.data.hits  );
        return response.data.hits
    })
    // .then((result) => { console.log('what is result?', result);})
    // .then(result => this._setSearchTopStories(result));
};

export const doSearch = (text, page) => {
    // console.log('can prop get here', this.props);
    return {
        type: 'DO_SEARCH',
        payload: fetchSearchTopStories(text, page)
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
// }
