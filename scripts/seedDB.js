const mongoose = require( 'mongoose' );
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
            firstName: 'Test',
            lastName: 'Test',
            alias: 'Test',
            email: 'test@test.com',
            password: 'test',
            picture: 'http://test/test.jpg',
            type: 'user',
        }
    ],
    artworks: [
        {
            name: 'Test',
            description: 'Test',
            type: 'paint',
            picture: 'http://test/test.jpg',
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
        .then( () => db.User.collection.insertMany( lData.users ) )
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
        .then( () => db.Artwork.collection.insertMany( lArtworks ) )
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
function createComments( pIds ){
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
        .then( () => db.Comment.collection.insertMany( lComments ) )
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
function createLikes( pIds ){
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
        .then( () => db.Like.collection.insertMany( lLikes ) )
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
    .then( createComments )
    .then( createLikes )
    .then( function( pIds ){
        console.log( '\n-------------------\n' );
        console.log( pIds );
        process.exit( 0 );
    } );
