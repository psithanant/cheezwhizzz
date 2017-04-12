import { combineReducers } from 'redux'
import distance_reducer from './searchCheeseByDistance'

import results from './cheeseResultReducer'
import navQuery from './reducer_navSearchQuery'
import navResult from './reducer_navSearchResults'
import substituteQuery from './substituteQueryReducer'
import combineDistanceZipcode from './CombineZideDistance'

const rootReducer = combineReducers({
  distance_reducer,
  results,
  navQuery,
  navResult,
  substituteQuery,
  combineDistanceZipcode
});


export default rootReducer
