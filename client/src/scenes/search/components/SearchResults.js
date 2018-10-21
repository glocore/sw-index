// lib imports
import React from 'react'
import styled from 'styled-components'

const SearchResults = ({ results, loading }) => (
  <SearchResultsWrapper>
    {loading && <LoadingIndicator/>}
    {!loading && results.map((result, index) => 
      <SearchResult key={index} name={result.name}/>)
    }
  </SearchResultsWrapper>

)

const LoadingIndicator = () => (
  <LoadingText>Loading...</LoadingText>
)

const SearchResult = ({ name }) => (
  <SearchResultContainer onClick={() => console.log('lol')}>
    <SearchResultText>{name}</SearchResultText>
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

const LoadingText = styled.p`
  color: white;
  ${({ theme }) => `
    padding: ${theme.padding.vertical.main} ${theme.padding.horizontal.page};
  `}
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

export default SearchResults