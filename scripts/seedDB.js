const mongoose = require( 'mongoose' );
const db = require( '../models' );

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/reactreadinglist';
// Connect to the Mongo DB
mongoose.connect( MONGODB_URI );

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
            type: 'test',
            picture: 'http://test/test.jpg',
            video: 'http://test/test.mp4',
            public: true,
        }
    ],
};

db.User
    // Remove all records
    .remove( {} )
    .then( () => db.User.collection.insertMany( lData.users ) )
    .then( pData => {
        console.log( '\n-------------------\n' );
        console.log( pData.result.n + ' users inserted!' );

        const lUserIds = Object.values( pData.insertedIds );
        let lArtworks = lData.artworks.map( ( pValue ) => {
            return {
                ...pValue,
                user: getRandomArrayValue( lUserIds )
            };
        } );

        db.Artwork
            .remove( {} )
            .then( () => db.Artwork.collection.insertMany( lArtworks ) )
            .then( pData => {
                console.log( '\n-------------------\n' );
                console.log( pData.result.n + ' artworks inserted!' );

                const
                    lArtworkIds = Object.values( pData.insertedIds ),
                    lArtworkIdsToComment = getRandomFilteredArray( lArtworkIds ),
                    lCommentUserIds = getRandomFilteredArray( lUserIds ),
                    lComments = lArtworkIdsToComment.map( ( pValue ) => {
                        return {
                            user: getRandomArrayValue( lCommentUserIds ),
                            artwork: pValue,
                            content: 'Test'
                        };
                    } ),
                    lArtworkIdsToLike = getRandomFilteredArray( lArtworkIds ),
                    lLikeUserIds = getRandomFilteredArray( lUserIds ),
                    lLikes = lArtworkIdsToLike.map( ( pValue ) => {
                        return {
                            user: getRandomArrayValue( lLikeUserIds ),
                            artwork: pValue,
                        };
                    } );

                    console.log( lArtworkIdsToComment );
                    console.log( lArtworkIdsToLike );

                    db.Comment
                        .remove( {} )
                        .then( () => db.Comment.collection.insertMany( lComments ) )
                        .then( pData => {
                            console.log( '\n-------------------\n' );
                            console.log( pData.result.n + ' comments inserted!' );

                            db.Like
                                .remove( {} )
                                .then( () => db.Like.collection.insertMany( lLikes ) )
                                .then( pData => {
                                    console.log( '\n-------------------\n' );
                                    console.log( pData.result.n + ' likes inserted!' );

                                    process.exit( 0 );
                                } )
                                .catch( err => {
                                    console.error( err );
                                    process.exit( 1 );
                                } );
                        } )
                        .catch( err => {
                            console.error( err );
                            process.exit( 1 );
                        } );
            } )
            .catch( err => {
                console.error( err );
                process.exit( 1 );
            } );
    } )
    .catch( err => {
        console.error( err );
        process.exit( 1 );
    } );
