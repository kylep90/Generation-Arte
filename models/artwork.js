const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

const artworkSchema = new Schema( {
    name: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: true
    },
    type: {
        type: String,
        trim: true,
        required: true,
        match: [/^paint|music|dance$/, "Please enter a valid artwork type"]
    },
    picture: {
        // Picture URL for now
        type: String,
        trim: true,
        required: false
    },
    video: {
        // YouTube URL for now
        type: String,
        trim: true,
        required: false
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    public: {
        type: Boolean,
        trim: true,
        required: true
    },
} );

const Artwork = mongoose.model( 'Artwork', artworkSchema );

module.exports = Artwork;
