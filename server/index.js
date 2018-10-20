const { ApolloServer }  = require('apollo-server')
const typeDefs          = require('./typeDefs')
const resolvers         = require('./resolvers')
const dataSources       = require('./dataSources')

require('dotenv').config()

const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  dataSources,
});

const port = process.env.SERVER_LISTENER_PORT

const startServer = async() => {
  const { url } = await server.listen({ port })
  console.log(`Server listening at ${url}`)
}

startServer()