const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    password: String
    reviews: [Review]
    Comment: [Comment]
    movieList: movieList
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
    Movie: [Movie]
    user: User
  }
  type Review {
    text: String
    user: User
    movie: [Movie]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    reviews(username: String): [Review]
    review(reviewId: ID!): Review
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
