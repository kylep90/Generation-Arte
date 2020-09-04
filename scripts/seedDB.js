const mongoose = require( 'mongoose' );
const bcrypt = require ( 'bcryptjs' );
const db = require( '../models' );

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/reactreadinglist';
// Connect to the Mongo DB
mongoose.connect( MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
} );

function getRandomNumber( pMaximum, pMinimum = 0 ){
    return Math.floor( Math.random() * pMaximum ) + pMinimum;
}
function getRandomArrayValue( pArray ){
    return pArray[ getRandomNumber( pArray.length - 1 ) ];
}
function getRandomFilteredArray( pArray, pMinimumElements = 1, pUnique = true ){
    let lResult = [];
    const lNumberOfElements = getRandomNumber(pArray.length, 1);

    for ( let i = 0; i < lNumberOfElements; i++ ){
        let lNewValue = getRandomArrayValue( pArray );

        if ( ! pUnique || ( pUnique && ! lResult.includes( lNewValue ) ) ){
            lResult.push( lNewValue );
        } else {
            i--;
        }
    }

    return lResult;
}

const lData = {
    users: [
        {
            firstName: 'Diana',
            lastName: 'Garcia',
            alias: 'Profe God',
            email: 'Diana@test.com',
            password: bcrypt.hashSync ('testtest'),
            picture: 'https://api.adorable.io/avatars/285/admin.png',
            type: 'user',
        }
    ],
    artworks: [
        {
            name: 'Building',
            description: 'Holiday',
            type: 'paint',
            picture: 'https://i.picsum.photos/id/290/300/200.jpg?hmac=6wTaiPU-UNW8ZmnxHgmvWbYgKDagHVBX4zGoQLKf3ZE',
            video: 'http://test/test.mp4',
            public: true,
        }
    ],
    events: [
        {
            name: 'Test',
            description: 'Test',
            type: 'music',
            datetime: new Date(),
            location: 'Test',
            cost: 0,
            currency: 'MXN',
            picture: 'http://test/test.jpg',
            video: 'http://test/test.mp4',
            public: true,
        }
    ],
};

function createUsers(){
    return db.User
        // Remove all records
        .deleteMany( {} )
        .then( () => db.User.insertMany( lData.users, { rawResult: true } ) )
        .catch( err => {
            console.error( err );
            process.exit( 1 );
        } )
        .then( pData => {
            console.log( pData.result.n + ' users inserted!' );

            const lUserIds = Object.values( pData.insertedIds );
            return {
                users: lUserIds
            };
        } );
}
function createArtworks( pIds ){
    let lArtworks = lData.artworks.map( ( pValue ) => {
        return {
            ...pValue,
            user: getRandomArrayValue( pIds.users )
        };
    } );

    return db.Artwork
        .deleteMany( {} )
        .then( () => db.Artwork.insertMany( lArtworks , { rawResult: true } ) )
        .catch( err => {
            console.error( err );
            process.exit( 1 );
        } )
        .then( pData => {
            console.log( pData.result.n + ' artworks inserted!' );

            const lArtworkIds = Object.values( pData.insertedIds );
            pIds.artworks = lArtworkIds;
            return pIds;
        } );
}
function createEvents( pIds ){
    let lEvents = lData.events.map( ( pValue ) => {
        return{
            ...pValue,
            user: getRandomArrayValue( pIds.users )
        };
    } );

    return db.Event
        .deleteMany( {} )
        .then( () => db.Event.insertMany( lEvents , { rawResult: true } ) )
        .catch( err => {
            console.error( err );
            process.exit( 1 );
        } )
        .then( pData => {
            console.log( pData.result.n + ' events inserted!' );
            const lEventIds = Object.values( pData.insertedIds );
            pIds.events = lEventIds;
            return pIds;
        } );
}
function createArtworkComments( pIds ){
    const
        lArtworkIdsToComment = getRandomFilteredArray( pIds.artworks ),
        lCommentUserIds = getRandomFilteredArray( pIds.users ),
        lComments = lArtworkIdsToComment.map( ( pValue ) => {
            return {
                user: getRandomArrayValue( lCommentUserIds ),
                artwork: pValue,
                content: 'Test'
            };
        } );

    return db.Comment
        .deleteMany( {} )
        .then( () => db.Comment.insertMany( lComments , { rawResult: true } ) )
        .catch( err => {
            console.error( err );
            process.exit( 1 );
        } )
        .then( pData => {
            console.log( pData.result.n + ' comments inserted!' );

            const lCommentIds = Object.values( pData.insertedIds );
            pIds.comments = lCommentIds;
            return pIds;
        } );
}
function createArtworkLikes( pIds ){
    const
        lArtworkIdsToLike = getRandomFilteredArray( pIds.artworks ),
        lLikeUserIds = getRandomFilteredArray( pIds.users ),
        lLikes = lArtworkIdsToLike.map( ( pValue ) => {
            return {
                user: getRandomArrayValue( lLikeUserIds ),
                artwork: pValue,
            };
        } );

    return db.Like
        .deleteMany( {} )
        .then( () => db.Like.insertMany( lLikes , { rawResult: true } ) )
        .catch( err => {
            console.error( err );
            process.exit( 1 );
        } )
        .then( pData => {
            console.log( pData.result.n + ' likes inserted!' );

            const lLikesIds = Object.values( pData.insertedIds );
            pIds.likes = lLikesIds;
            return pIds;
        } );
}

console.log( '-------------------\n' );
createUsers()
    .catch( err => {
        console.error( err );
        process.exit( 1 );
    } )
    .then( createArtworks )
    .then( createEvents )
    .then( createArtworkComments )
    .then( createArtworkLikes )
    .then( function( pIds ){
        console.log( '\n-------------------\n' );
        console.log( pIds );
        process.exit( 0 );
    } );
