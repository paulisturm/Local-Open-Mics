const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    favoriteMics: [Mic]!
  }
  type Mic {
    micId: ID
    venue: String
    description: String
    host: String
    covercharge: String 
}
type Auth {
    token: String
    user: User
}
type Query {
    
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
  `;

  module.exports = typeDefs;