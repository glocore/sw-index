// lib imports
import React from 'react'
import styled from 'styled-components'
import { 
  compose,
  withHandlers,
} from 'recompose'
import debounceHandler from '@hocs/debounce-handler'
import { FaSearch } from 'react-icons/fa'

// app imports
import stringUtils from 'utils/stringUtils'

const {
  checkIfEmptyString,
  sanitizeString,
} = stringUtils

const SearchBox = ({ onChange }) => (
  <SearchBoxWrapper>
    <TextBox onChange={onChange} />
    <SearchIcon/>
  </SearchBoxWrapper>
)

export default compose(
  withHandlers({
    onChange: props => event => {
      const { value } = event.target
      event.persist()

      if(!checkIfEmptyString(value))
        props.onChangeText(sanitizeString(value))
    }
  }),
  debounceHandler('onChange', 500),
)(SearchBox)

const TextBox = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  width: 100%;
  ${({ theme }) => `
    color: ${theme.palette.primary};
    font-size: ${theme.fontSize.large};
  `}

`

const SearchBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  ${({ theme }) => `
    border-bottom: 2px solid ${theme.palette.primary};
    margin: ${theme.padding.horizontal.page};
    padding-bottom: ${theme.padding.vertical.main};
  `}
`

const SearchIcon = styled(FaSearch)`
  ${({ theme }) => `
    color: ${theme.palette.primary};
    font-size: ${theme.fontSize.large};
  `}
`