// lib imports
import { combineReducers } from 'redux'

// app imports
import { searchReducer } from './scenes/search/redux'

export default combineReducers({ 
  search: searchReducer,
})
