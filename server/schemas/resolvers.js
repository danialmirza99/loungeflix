const { User, Movie, Review, MovieList  } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async() => {
      return User.find().populate('reviews');
    },
    user: async (parent, { username}) => {
      return User.findOne({ username}).populate('reviews');
    },
    reviews: async (parent, { username}) => {
      const params = username ? { username } : {};
      return Review.find(params);
    },
    review: async (parent, { reviewId }) => {
      return Review.findOne({ _id: reviewId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id}).populate('reviews');
      }
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    saveMovie: async (parent, { newMovie }, context) => {
      if(context.user){
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $pull: { savedMovies: { movieId }}},
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError('You are not logged in!');
    },
  }
};

module.exports = resolvers;
