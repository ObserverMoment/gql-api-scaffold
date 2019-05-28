export const Item = `
  type Item {
    id: ID!
    name: String
    description: String
  }

  extend type Query {
    items: [Item]!
  }

  extend type Mutation {
    createItem(input: CreateItemInput!): Item!
  }

  input CreateItemInput {
    name: String
    description: String
    userId: ID!
  }
`
