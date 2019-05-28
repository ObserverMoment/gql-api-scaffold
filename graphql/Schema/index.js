import { User } from './User'
import { Item } from './Item'

const Schema = `
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
`

export default [ Schema, User, Item ]
