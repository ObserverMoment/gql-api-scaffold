export default {
  Query: {
    users: (parent, args, { models }, info) => models.User.findAll(),
    items: (parent, args, { models }, info) => models.Item.findAll()
  },
  Mutation: {
    createUser: (parent, args, { models }, info) => models.User.create(args),
    createItem: (parent, args, { models }, info) => models.Item.create(args)
  }
}
