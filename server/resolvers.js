module.exports = {
  Query: {
    people: async (_source, _args, { dataSources }) => {
      return dataSources.SWAPI.getPeople()
    }
  },
};