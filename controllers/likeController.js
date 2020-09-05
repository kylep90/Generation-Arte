const db = require( '../models' );

module.exports = {
    findAll: function( req, res ) {
        db.Like
            .find( req.query )
            .populate( 'user' )
            .populate( 'artwork' )
            .populate( 'event' )
            .sort( { email: 1 } )
                .then( dbModel => res.json( dbModel ) )
                .catch( err => res.status( 422 ).json( err ) );
    },
    findById: function( req, res ) {
        db.Like
            .findById( req.params.id )
            .populate( 'user' )
            .populate( 'artwork' )
            .populate( 'event' )
                .then( dbModel => res.json( dbModel ) )
                .catch( err => res.status( 422).json( err ) );
    },
    findByUserId: function( req, res ) {
        db.Like
            .find( { user: req.params.id } )
            .populate( 'user' )
            .populate( 'artwork' )
            .populate( 'event' )
                .then( dbModel => res.json( dbModel ) )
                .catch( err => res.status( 422 ).json( err ) );
    },
    findByArtworkId: function( req, res ) {
        db.Like
            .find( { artwork: req.params.id } )
            .populate( 'user' )
            .populate( 'artwork' )
            .populate( 'event' )
                .then( dbModel => res.json( dbModel ) )
                .catch( err => res.status( 422 ).json( err ) );
    },
    findByEventId: function( req, res ) {
        db.Like
            .find( { event : req.params.id } )
            .populate( 'user' )
            .populate( 'artwork' )
            .populate( 'event' )
                .then( dbModel => res.json( dbModel ) )
                .catch( err => res.status( 422 ).json( err ) );
    },
    create: function( req, res ) {
        let lRequestBody = { ...req.body};
        if ( req.user ){
            if ( req.user.type !== 'admin' ){
                lRequestBody.user = req.user._id;
            }
        db.Like
            .create( req.body )
                .then( dbModel => res.json( dbModel ) )
                .catch( err => res.status( 422 ).json( err ) );
        } else {
            return res.status( 401 ).json( {
                error: 'Unauthorized'
            } );
        }
    },
    update: function( req, res ) {
        let lRequestBody = { ...req.body };
        if ( req.user ){
            if ( req.user.type !== 'admin' ){
                delete lRequestBody.user;
            }
        db.Like
            .findOneAndUpdate( { _id: req.params.id }, req.body )
                .then( dbModel => res.json( dbModel ) )
                .catch( err => res.status( 422 ).json( err ) );
        } else {
            return rest.status( 401 ).json( {
                error: 'Unauthorized'    
            } );
        }
    },
    remove: function( req, res ) {
        if ( req.user ){    
        db.Like
            .findById( { _id: req.params.id } )
                .then( ( dbModel ) => {
                    if ( req.user._id == dbModel.user || req.user.type === 'admin' ) {
                        return res.json( dbModel.remove() ); 
                    } else {
                        res.status( 403 ).json( {
                            error: 'Forbidden'
                        } );
                    }
                } )
                // .then( dbModel => res.json( dbModel ) )
                .catch( err => res.status( 422 ).json( err ) );
        } else {
            return res.status( 401 ).json( {
                error: 'Unauthorized '
            } );
        }
    }
};