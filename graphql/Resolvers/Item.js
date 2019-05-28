export default {
  Query: {
    async items (parent, args, { models }, info) {
      const items = await models.Item.findAll()
      return items
    }
  },
  Mutation: {
    async createItem (parent, { input }, { models }, info) {
      const item = await models.Item.create(input)
      return item
    }
  }
}
