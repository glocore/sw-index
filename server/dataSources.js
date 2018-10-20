const { RESTDataSource } = require('apollo-datasource-rest')

class SWAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://swapi.co/api';
  }

  async getPeople() {
    const response = await this.get(`people/`)
    return response.results
  }
}

module.exports = () => ({
  SWAPI: new SWAPI()
})