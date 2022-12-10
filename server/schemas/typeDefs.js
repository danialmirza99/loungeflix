const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    password: String
    Review: [review]
    Comment: [comment]
    movieList: MovieList
  }
  type Comment {
    text: String
    user: User
    review: Review
  }
  type Movie {
    title: String
    genre: String
    description: String
  }
  type movieList {
    Movie: [movie]
    user: User
  }
  type Review {
    text: String
    user: User
    movie: [movie]
  }

  type Query {
    user(username: String!): User
  }

  type Mutation {
    addUser(username: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
