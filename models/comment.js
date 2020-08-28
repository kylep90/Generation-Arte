const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

const commentSchema = new Schema( {
    content: {
        type: String,
        trim: true,
        required: false
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    artwork: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Artwork'
    },
    public: {
        type: Boolean,
        trim: true,
        required: false
    },
} );

const Comment = mongoose.model( 'Comment', commentSchema );

module.exports = Comment;
