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

  async getResourceNames(urls) {
    let resourceNames = []
    const fetchData = url => new Promise( resolve => this.get(url).then(resolve) )

    await Promise.all(urls.map(fetchData))
    .then(responses => {resourceNames = responses.map(data => data.name || data.title)})
    .catch(error => console.error(error))

    return {names: resourceNames}
  }

  async getCharacterDetails(url) {
    const response = await this.get(url)
    return response
  }
}

module.exports = () => ({
  SWAPI: new SWAPI()
})