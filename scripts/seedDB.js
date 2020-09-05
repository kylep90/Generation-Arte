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
            "firstName": "Diana",
            "lastName": "Garcia",
            "alias": "Profe God",
            "picture": "https://api.adorable.io/avatars/285/admin.png",
            "type": "user",
            "bio": "Full Stack Instructor",
            "facebookUrl": "https://www.facebook.com/michaeljackson",
            "industry": "Tech",
            "instagramUrl": "https://www.instagram.com/michaeljackson/?hl=en",
            "specific": "Teacher",
            "youtubeUrl": "https://www.youtube.com/channel/UC5OrDvL9DscpcAstz7JnQGA",
            "artworksCount": 1,
            "commentsCount": 1,
            "likesCount": 1,
        },
        {
            "firstName": "Luis",
            "lastName": "Miguel",
            "alias": "El Sol de México",
            "picture": "https://ca-times.brightspotcdn.com/dims4/default/abb4b50/2147483647/strip/true/crop/1200x675+0+0/resize/840x472!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fdd%2F48%2F48c2dd45c6794a8de8c951c9d4a5%2Fhoyla-hackean-facebook-de-luis-miguel-20181213-001",
            "type": "user",
            "facebooklUrl": "https://www.facebook.com/luismiguelofficial/",
            "twitterUrl": "https://twitter.com/LMXLM?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
            "instagramUrl": "https://www.instagram.com/lmxlm/?hl=es-la",
            "bio": "Luis Miguel Gallego Basteri is a Mexican singer and icon in Latin America, often referred to as El Sol de México, which is the nickname his mother gave him as a child- 'mi sol'",
            "facebookUrl": "https://www.facebook.com/luismiguelofficial/",
            "industry": "Music",
            "specific": "Singer",
            "artworksCount": 0,
            "commentsCount": 0,
            "likesCount": 0,
        },
        {
            
            "firstName": "Los Master",
            "lastName": "Plus",
            "alias": "Los Master Plus",
            "picture": "http://www.redcapitalmx.com/wp-content/uploads/2018/07/los-master-plus.jpg",
            "type": "user",
            "facebooklUrl": "https://www.facebook.com/losmasterplus/",
            "twitterUrl": "https://twitter.com/losmasterplus",
            "instagramUrl": "https://www.instagram.com/losmasterplus/?hl=es-la",
            "bio": "Los Master Plus nace en la musical ciudad de Guadalajara, Jalisco en el año de 2010. La idea principal detrás del concepto es generar una nueva evolución de los ritmos populares mexicanos mediante la mezcla de géneros y elementos regionales con ritmos de la música moderna del mundo.",
            "industry": "Music",
            "specific": "Band",
            "facebookUrl": "https://www.facebook.com/losmasterplus/",
            "artworksCount": 0,
            "commentsCount": 0,
            "likesCount": 0,
        },
        {
            
            "firstName": "Michael",
            "lastName": "Jackson",
            "alias": "G.O.A.T.",
            "picture": "https://www.click2houston.com/resizer/NfVnwb40qYMHo0c7ukgmS306UIY=/1600x1124/smart/filters:format(jpeg):strip_exif(true):strip_icc(true):no_upscale(true):quality(65)/arc-anglerfish-arc2-prod-gmg.s3.amazonaws.com/public/YKDXLMSILBFH7ATEIZTFGMXIHI.jpg",
            "type": "user",
            "bio": "Michael Joseph Jackson was an American singer, songwriter, and dancer. Dubbed the 'King of Pop', he is regarded as one of the most significant cultural figures of the 20th century.",
            "facebookUrl": "https://www.facebook.com/michaeljackson",
            "industry": "Music",
            "instagramUrl": "https://www.instagram.com/michaeljackson/?hl=en",
            "specific": "Singer",
            "youtubeUrl": "https://www.youtube.com/channel/UC5OrDvL9DscpcAstz7JnQGA",
            "artworksCount": 1,
            "commentsCount": 0,
            "likesCount": 0,
        
        },
        // {
        //     firstName: 'Diana',
        //     lastName: 'Garcia',
        //     alias: 'Profe God',
        //     email: 'Diana@test.com',
        //     password: bcrypt.hashSync ('testtest'),
        //     picture: 'https://api.adorable.io/avatars/285/admin.png',
        //     type: 'admin',
        // }
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
