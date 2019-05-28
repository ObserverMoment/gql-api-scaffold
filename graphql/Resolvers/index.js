import User from './User'
import Item from './Item'

const resolvers = [ User, Item ]

export default resolvers.reduce((a, b) => {
  return {
    Query: { ...a.Query, ...b.Query },
    Mutation: { ...a.Mutation, ...b.Mutation }
  }
}, { Query: {}, Mutation: {} })
