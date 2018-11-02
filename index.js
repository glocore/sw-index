const { ApolloServer }  = require('apollo-server-express')
const cowsay            = require('cowsay')
const express           = require('express')
const path              = require('path')
const dataSources       = require('./server/dataSources')
const resolvers         = require('./server/resolvers')
const typeDefs          = require('./server/typeDefs')

require('dotenv').config()

const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  dataSources,
});

const app = express()
app.use(express.static(path.join(__dirname, 'client/build')))

const port = process.env.PORT || 4000
server.applyMiddleware({ app })

const startServer = async() => {
  await app.listen({ port })
  const moo = cowsay.say({ text: `Server listening at port ${port}` })
  console.log(moo)
}

startServer()