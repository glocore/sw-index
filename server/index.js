const { ApolloServer }  = require('apollo-server')
const typeDefs          = require('./typeDefs')
const resolvers         = require('./resolvers')
const dataSources       = require('./dataSources')
const cowsay            = require('cowsay')

require('dotenv').config()

const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  dataSources,
});

const port = process.env.SERVER_LISTENER_PORT || 4000

const startServer = async() => {
  const { url } = await server.listen({ port })
  const moo = cowsay.say({ text: `Server listening at ${url}` })
  console.log(moo)
}

startServer()