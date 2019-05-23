import express from 'express'
import { ApolloServer } from 'apollo-server-express'

// GraphQL
import typeDefs from './GraphQL/Schema'
import resolvers from './GraphQL/Resolvers'

// DB
import db from './config/db'
import models from './models'

const PORT = process.env.PORT || 4000

const init = async () => {
  try {
    await db.authenticate()
    await db.sync()

    const app = express()

    const server = new ApolloServer({ typeDefs, resolvers, context: { models } })
    server.applyMiddleware({ app })

    app.listen({ port: PORT }, () =>
      console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
    )
  } catch (e) {
    console.log(e)
    console.log('Not connected to database')
  }
}

init()
