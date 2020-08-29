const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        firstName: {
            type: String,
            trim: true,
            required: true
        },
        lastName: {
            type: String,
            trim: true,
            required: true
        },
        alias: {
            type: String,
            trim: true,
            required: true
        },
        email: {
            type: String,
            trim: true,
            required: true,
            match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
        },
        password: {
            type: String,
            trim: true,
            required: true,
            validate: [({ length }) => length >= 8, "Password should be longer"]
        },
        picture: {
            type: String,
            trim: true,
            required: true
        },
        type: {
            type: String,
            trim: true,
            required: true,
            enum: [ 'admin', 'user' ],
        }
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
userSchema.virtual( 'artworksCount', {
    ref: 'Artwork',
    localField: '_id',
    foreignField: 'user',
    count: true
} );
userSchema.virtual( 'commentsCount', {
    ref: 'Comment',
    localField: '_id',
    foreignField: 'user',
    count: true
} );
userSchema.virtual( 'likesCount', {
    ref: 'Like',
    localField: '_id',
    foreignField: 'user',
    count: true
} );

const User = mongoose.model( 'User', userSchema );

module.exports = User;
