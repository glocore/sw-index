// lib imports
import React from 'react'
import styled, { keyframes } from 'styled-components'
import { compose, withHandlers } from 'recompose'
import { connect } from 'react-redux'

// app imports
import deathStar from 'assets/img/death-star.png'
import searchOperations from '../redux/operations'

const SearchResults = ({ results, loading, onSelect }) => (
  <SearchResultsWrapper>
    {loading && <LoadingIndicator/>}
    {!loading && results.map((result, index) => 
      <SearchResult 
        key={index} 
        data={result}
        onSelect={onSelect}
      />
    )}
  </SearchResultsWrapper>

)

const LoadingIndicator = () => (
  <LoadingWrapper>
    <LoadingImage src={deathStar} />
  </LoadingWrapper>
)

const SearchResult = ({ data, onSelect }) => (
  <SearchResultContainer onClick={() => onSelect(data)}>
    <SearchResultText>{data.name}</SearchResultText>
  </SearchResultContainer>
)

const SearchResultsWrapper = styled.div`
  overflow: auto;
  flex: 1;
  
  ::-webkit-scrollbar {
      width: 5px;
  }

  ::-webkit-scrollbar-track {
      background: transparent; 
  }

  ::-webkit-scrollbar-thumb {
      background: #888; 
  }
  
  ::-webkit-scrollbar-thumb:hover {
      background: #555; 
  }
`

const LoadingWrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`

const pulse = keyframes`
  0% {
    opacity: 0.2;
  }
  
  50% {
    opacity: 0.9;
  }

  100% {
    opacity: 0.2;
  }
`

const LoadingImage = styled.img`
  width: 70px;
  animation: ${pulse} 1.5s linear infinite;
`

const SearchResultContainer = styled.div`
  background-color: transparent;
  transition: background-color 0.5s;
  cursor: pointer;
  :hover {
    background-color: rgba(255, 255, 255, 0.2);;
  }
  ${({ theme }) => `
    padding: ${theme.padding.vertical.main} ${theme.padding.horizontal.page};
  `}
`

const SearchResultText = styled.p`
  color: white;
`

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => {
  const { updateSelectedCharacter } = searchOperations

  return {
    updateSelectedCharacter: selectedCharacter => 
      dispatch(updateSelectedCharacter(selectedCharacter))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    onSelect: props => async selectedCharacter => {
      props.updateSelectedCharacter(selectedCharacter)
    }
  })
)(SearchResults)