module.exports = {
  Query: {
    allPeople: async (_source, _args, { dataSources }) => {
      return dataSources.SWAPI.getAllPeople()
    },
    searchResults: async (_source, { name }, { dataSources }) => {
      return dataSources.SWAPI.searchPeople(name)
    },
  },
};