// lib imports
import React from 'react'
import styled from 'styled-components'
import { 
  compose,
  withHandlers,
} from 'recompose'
import _ from 'lodash'
import debounceHandler from '@hocs/debounce-handler'

// app imports
import stringUtils from 'utils/stringUtils'

const SearchBox = ({ onChange }) => (
  <>
    <TextBox onChange={onChange} />
  </>
)

export default compose(
  withHandlers({
    onChange: props => event => {
      const { value } = event.target
      event.persist()

      if(!stringUtils.checkIfEmptyString(value))
        props.onChangeText(stringUtils.sanitizeString(value))
    }
  }),
  debounceHandler('onChange', 500),
)(SearchBox)

const TextBox = styled.input``
