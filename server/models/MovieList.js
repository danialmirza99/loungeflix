const { Schema, model } = require('mongoose');

const movieListSchema = new Schema({
    Movie:{
        type: Schema.Types.ObjectId,
        ref: 'Movie',
        required: true
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

const MovieList = mongoose.model('MovieList', movieListSchema);

module.exports = MovieList;