const { Schema, model } = require('mongoose');
// const bcrypt = require('bcrypt');

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
   MovieList:{
    type: Schema.Types.ObjectId,
    ref:'MovieList',
    req: true
}
});

const User = mongoose.model('User', userSchema);

module.exports = User;