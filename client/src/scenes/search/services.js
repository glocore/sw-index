// lib imports
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

const client = new ApolloClient({
  uri: process.env.CLIENT_BASE_URL
});

class Services {
  searchPeople = async searchTerm => {
    const response = await client
    .query({
      query: gql`
        {
          searchResults(name: "${searchTerm}") {
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
}

export default new Services()