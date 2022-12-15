const { Schema, model } = require('mongoose');

const movieSchema = new Schema({
    title:{
        type: String,
        required: true,
        trim: true
    },
    plot:{
        type: String,
        required: true,
        trim: true
    },
    actors:{
        type: String,
        required: true,
        trim: true
    },
    poster:{
        type: String,
        required: true,
        trim: true
    }
});

const Movie = model('Movie', movieSchema);

module.exports = Movie;