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
  }

  type Query {
    people: [Person]
  }
`
