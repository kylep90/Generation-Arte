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
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
    }
} );
likeSchema.index( { users: 1, artwork: 1, event: 1 }, { unique: true } );
const Like = mongoose.model( 'Like', likeSchema );

module.exports = Like;
