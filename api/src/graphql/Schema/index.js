import { gql } from 'apollo-server-express'

export default gql`
  type Query {
    users: [User]!
    items: [Item]!
  }

  type User {
    id: ID!,
    username: String,
    email: String,
    roleType: String
  }

  type Item {
    id: ID!,
    name: String,
    description: String
  }

  type Mutation {
    createUser(username: String, email: String, password: String): User!
    createItem(name: String, description: String, userId: ID!): Item!
  }
`
