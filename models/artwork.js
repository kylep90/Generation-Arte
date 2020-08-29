const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

const artworkSchema = new Schema(
    {
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
            enum: [ 'paint', 'music', 'dance', 'other' ]
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
    }, 
    // Obtained from https://github.com/Automattic/mongoose/issues/7573#issuecomment-516440616
    // This allows us to obtain schema related counts
    {
        toJSON: {
            // Output schema virtuals when converting to JSON
            virtuals: true
        },
        toObject: {
            // Output schema virtuals when converting to JS Objects
            virtuals: true
        }
    }
);
// Add a virtual commentsCount field that can be populated with the count of
// comments for the artwork
// See https://mongoosejs.com/docs/populate.html#count for more information on
// populate virtuals
artworkSchema.virtual( 'commentsCount', {
    ref: 'Comment',
    localField: '_id',
    foreignField: 'artwork',
    count: true
} );
artworkSchema.virtual( 'likesCount', {
    ref: 'Like',
    localField: '_id',
    foreignField: 'artwork',
    count: true
} );

const Artwork = mongoose.model( 'Artwork', artworkSchema );

module.exports = Artwork;
