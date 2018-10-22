import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  updateSelectedCharacter: ['selectedCharacter'],
})

export { Types, Creators }
