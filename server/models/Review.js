const { Schema, model } = require('mongoose');

const reviewSchema = new Schema({
    text:{
        type: String,
        required: true,
        trim: true
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    movie:{
        type: Schema.Types.ObjectId,
        ref: 'Movie',
        required: true
    }
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;