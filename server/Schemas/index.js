const { gql } = require('apollo-server-express');

// Define your GraphQL schema
const typeDefs = gql`
  type Query {
    hello: String
  }

  type Mutation {
    // Define your mutation types here
  }
`;

module.exports = typeDefs;
