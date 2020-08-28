const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

const likeSchema = new Schema( {
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    artwork: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Artwork'
    },
} );

const Like = mongoose.model( 'Like', likSchema );

module.exports = Like;
