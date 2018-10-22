module.exports = {
  Query: {
    allPeople: async (_source, _args, { dataSources }) => {
      return dataSources.SWAPI.getAllPeople()
    },
    searchResults: async (_source, { name }, { dataSources }) => {
      return dataSources.SWAPI.searchPeople(name)
    },
    characterDetails: async (_source, { url }, { dataSources }) => {
      return dataSources.SWAPI.getCharacterDetails(url)
    },
    resourceNames: async (_source, { urls }, { dataSources }) => {
      return dataSources.SWAPI.getResourceNames(urls)
    },
  },
};