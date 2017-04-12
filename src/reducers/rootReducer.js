import { combineReducers } from 'redux'
import distance_reducer from './searchCheeseByDistance'

import results from './cheeseResultReducer'
import navQuery from './reducer_navSearchQuery'
import navResult from './reducer_navSearchResults'
import substituteQuery from './substituteQueryReducer'
import {reducer as formReducer } from 'redux-form'
import signUp from './reducer_registered'

const rootReducer = combineReducers({
  distance_reducer,
  results,
  navQuery,
  navResult,
  substituteQuery,
  signUp,
  form: formReducer

})


export default rootReducer
