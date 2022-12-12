const { User, Movie, Review, Comment, MovieList  } = require('../models');

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
      // throw new AuthenticationError('You need to be logged in!'); // auth error check
    },
  },

  Mutation: {},
};

module.exports = resolvers;
