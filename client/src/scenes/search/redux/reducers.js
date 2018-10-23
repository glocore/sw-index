// lib imports
import { createReducer } from 'reduxsauce'

// app imports
import { Types } from './actions'

const INITIAL_STATE = { 
  selectedCharacter: null,
  loading: false,
}

const updateSelectedCharacter = (state = INITIAL_STATE, action) => {
  const { selectedCharacter, loading } = action

  return {
    ...state, 
    selectedCharacter,
    loading,
  }
}

export const HANDLERS = {
  [Types.UPDATE_SELECTED_CHARACTER]: updateSelectedCharacter,
}

export default createReducer(INITIAL_STATE, HANDLERS)