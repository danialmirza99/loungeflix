const { Schema, model } = require('mongoose');
// const bcrypt = require('bcrypt');
const MovieList = require('./MovieList');
const Review = require('./Review');
const Comment = require('./Comment');

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    Review: [Review.schema],
    Comment: [Comment.schema],
    movieList: [MovieList.schema]
});

const User = mongoose.model('User', userSchema);

module.exports = User;