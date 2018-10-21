// lib imports
import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { 
  compose,
  withHandlers,
  withState,
} from 'recompose'

// app imports
import SearchBox from './components/SearchBox'

const client = new ApolloClient({
  uri: process.env.CLIENT_BASE_URL
});

const searchPeople = async value => {
  const response = await client
  .query({
    query: gql`
      {
        searchResults(name: "${value}") {
          name
          birth_year
          eye_color
          gender
        }
      }
    `
  })

  return response.data.searchResults
}

const Search = ({ onChangeText, searchResults, loading }) => (
  <>
    <SearchBox onChangeText={onChangeText}/>
    {loading && <p>Loading...</p>}
    {!loading && searchResults.map((result, index) => <p key={index}>{result.name}</p>)}
  </>
)

export default compose(
  withState('searchResults', 'updateResults', []),
  withState('loading', 'toggleLoading', false),
  withHandlers({
    onChangeText: props => async value => {
      props.toggleLoading(true)
      const results = await searchPeople(value)
      props.updateResults(results)
      console.log(results)
      props.toggleLoading(false)
    }
  }),
)(Search)
