const { RESTDataSource } = require('apollo-datasource-rest')

class SWAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://swapi.co/api';
  }

  async getAllPeople() {
    const response = await this.get(`people/`)
    return response.results
  }

  async searchPeople(name) {
    const response = await this.get(`people/?search=${name}`)
    return response.results
  }
}

module.exports = () => ({
  SWAPI: new SWAPI()
})