export default {
  Query: {
    async users (parent, args, { models }, info) {
      const users = await models.User.findAll()
      return users
    }
  },
  Mutation: {
    async createUser (parent, { input }, { models }, info) {
      const user = await models.User.create(input)
      return user
    }
  }
}
