const { Schema, model } = require('mongoose');

const movieListSchema = new Schema({
   
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    Movie: [Movie.schema]
});

const MovieList = mongoose.model('MovieList', movieListSchema);

module.exports = MovieList;