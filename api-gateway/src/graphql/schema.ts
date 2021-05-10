import { gql } from "apollo-server";

const schema = gql`
  scalar Date

  type User {
    username: ID!
  }

  type UserSession {
    createdAt: Date!
    expiresAt: Date!
    user: User!
  }

  type Mutation {
    createUser(username: String!, password: String!): User!
    createUserSession(username: String!, password: String!): UserSession!
    deleteUserSession(me: Boolean!): Boolean!
  }

  type Query {
    userSession(me: Boolean!): UserSession
  }
`;

export default schema;