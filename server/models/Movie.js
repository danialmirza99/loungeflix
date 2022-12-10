const { Schema, model } = require('mongoose');

const movieSchema = new Schema({
    title:{
        type: String,
        required: true,
        trim: true
    },
    genre:{
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        required: true,
        trim: true
    }
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;