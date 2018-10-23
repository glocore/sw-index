// lib imports
import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { 
  compose,
  lifecycle,
  withHandlers,
  withState,
} from 'recompose'

// app imports
import {
  SearchBox,
  SearchResults,
  Showcase,
} from './components'
import services from './services'
import searchOperations from './redux/operations'
import logo from 'assets/img/logo.png'

const { 
  getAllPeople,
  searchPeople,
} = services

const Search = ({ onChangeText, searchResults, loading }) => (
  <PageWrapper>
    <SearchSection>
      <HeaderWrapper>
        <Logo src={logo}/>
        <SearchBox onChangeText={onChangeText}/>
      </HeaderWrapper>
      <SearchResults
        loading={loading}
        results={searchResults}
      />
    </SearchSection>

    <ShowcaseSection>
      <Showcase/>
    </ShowcaseSection>      
  </PageWrapper>
)

const Logo = ({ ...props }) => (
  <LogoWrapper>
    <LogoImage {...props}/>
  </LogoWrapper>
)

const PageWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.palette.pageBackground};
  ${({ theme }) => theme.media.tablet`
    flex-direction: column;
  `}
`

const SearchSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border-right: 2px solid ${({ theme }) => theme.palette.primary};
  ${({ theme }) => theme.media.tablet`
    max-height: 50%;
    border: none;
    border-bottom: 2px solid ${theme.palette.primary};
  `}
`

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
`

const LogoWrapper = styled.div`
  max-width: 150px;
  min-width: auto;
  flex: 0.3;
  margin-left: ${({ theme }) => theme.padding.horizontal.level3};
`

const LogoImage = styled.img`
  width: 100%;
`

const ShowcaseSection = styled.div`
  flex: 1;
  overflow: auto;
  ::-webkit-scrollbar {
      width: 5px;
      height: 5px;
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
  ${({ theme }) => theme.media.tablet`
    max-height: 50%;
  `}
`

/**
 * Load all characters on initial render
 */
const loadAllPeopleOnMount = lifecycle({
  async componentDidMount() {
    this.props.toggleLoading(true)
    const results = await getAllPeople()
    this.props.updateResults(results)
    this.props.toggleLoading(false)
    this.props.updateSelectedCharacter(results[0])
  }
})

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
  withState('searchResults', 'updateResults', []),
  withState('loading', 'toggleLoading', false),
  withHandlers({
    onChangeText: props => async value => {
      props.toggleLoading(true)
      const results = await searchPeople(value)
      props.updateResults(results)
      props.toggleLoading(false)
    }
  }),
  loadAllPeopleOnMount,
)(Search)
