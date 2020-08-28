const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

const userSchema = new Schema( {
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
        match: [/^admin|user$/, "Please enter a valid user type"]
    },
    artworks: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Artwork'
        }
    ],
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ],
    likes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Like'
        }
    ],
} );

const User = mongoose.model( 'User', userSchema );

module.exports = User;
