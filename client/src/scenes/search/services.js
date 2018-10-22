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
            hair_color
            height
            mass
            skin_color
            homeworld
            films
            species
            starships
            vehicles
            url
          }
        }
      `
    })
  
    return response.data.searchResults
  }

  getCharacterDetails = async characterData => {
    const getResourcePromise = resourceType => {
      let urls = characterData[resourceType]
      if(typeof urls === 'string') urls = [urls]

      return client
      .query({
        query: gql`
          {
            resourceNames(urls: ${JSON.stringify(urls)}) {
              names
            }
          }
        `
      })
    }

    const speciesPromise    = getResourcePromise('species')
    const starshipsPromise  = getResourcePromise('starships')
    const vehiclesPromise   = getResourcePromise('vehicles')
    const homeworldPromise  = getResourcePromise('homeworld')
    const filmsPromise      = getResourcePromise('films')

    return { 
      species   : (await speciesPromise).data.resourceNames.names,
      starships : (await starshipsPromise).data.resourceNames.names,
      vehicles  : (await vehiclesPromise).data.resourceNames.names,
      films     : (await filmsPromise).data.resourceNames.names,
      homeworld : (await homeworldPromise).data.resourceNames.names,
    }
  }
}

export default new Services()