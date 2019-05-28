import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'

// Conneted models
import models, { sequelize } from './models'

// GraphQL
import typeDefs from './GraphQL/Schema'
import resolvers from './GraphQL/Resolvers'

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

const PORT = process.env.PORT || 4000

const init = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()

    const app = express()

    const server = new ApolloServer({
      schema,
      context: { models },
      logger: { log: e => console.log(e) }
    })

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
