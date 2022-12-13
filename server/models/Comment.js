const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
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
    review:{
        type: Schema.Types.ObjectId,
        ref: 'Review',
        required: true
    }
});

const Comment = model('Comment', commentSchema);

module.exports = Comment;