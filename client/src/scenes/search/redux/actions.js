import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  updateSelectedCharacter: ['selectedCharacter', 'loading'],
})

export { Types, Creators }
