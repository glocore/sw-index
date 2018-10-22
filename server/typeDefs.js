const { gql } = require('apollo-server')

module.exports = gql`
  type Person {
    name: String
    birth_year: String
    eye_color: String
    gender: String
    hair_color: String
    height: String
    mass: String
    skin_color: String
    homeworld: String
    films: [String]
    species: [String]
    starships: [String]
    vehicles: [String]
    url: String
  }

  type Names {
    names: [String]
  }

  type Query {
    allPeople: [Person]
    searchResults(name: String!): [Person]
    characterDetails(url: String!): Person
    resourceNames(urls: [String!]): Names
  }
`
