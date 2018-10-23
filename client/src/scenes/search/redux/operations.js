// app imports
import { Creators } from './actions'
import services from '../services'

const { updateSelectedCharacter: updateSelectedCharacterAction } = Creators

const updateSelectedCharacter = selectedCharacter => async dispatch => {
  dispatch(updateSelectedCharacterAction({
    ...selectedCharacter,
    homeworld: undefined,
    films: undefined,
    species: undefined,
    starships: undefined,
    vehicles: undefined,
  }, true))

  const characterDetails = await services.getCharacterDetails(selectedCharacter)
  dispatch(updateSelectedCharacterAction({
    ...selectedCharacter,
    ...characterDetails,
  }, false))
}

export default {
  updateSelectedCharacter
}