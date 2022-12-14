const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    password: String
    reviews: [Review]
    movieList: movieList
  }
  type Movie {
    movieId: String
    title: String
    plot: String
    actors: String
    poster: String
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

  input movieInput {
    movieId: String
    title: String
    plot: String
    actors: String
    poster: String
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
    saveMovie(newMovie: movieInput!): User
  }
`;

module.exports = typeDefs;
