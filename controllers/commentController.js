const db = require( '../models' );

module.exports = {
    findAll: function( req, res ) {
        db.Comment
            .find( req.query )
            .where( { public: true } )
            .populate( 'user' )
            .populate( 'artwork' )
            .populate( 'event' )
            .then( dbModel => {
                if (
                    dbModel.public
                    || (
                        req.user
                        && (
                            req.user.type === 'admin'
                            || req.user._id == dbModel.user
                        )
                    )
                ){
                    return res.json( dbModel );
                } else {
                    return res.status( 403 ).json( {
                        error: 'Forbidden'
                    } ); 
                }
            } )
            .sort( { email: 1 } )
                // .then( dbModel => res.json( dbModel ) )
                .catch( err => res.status( 422 ).json( err ) );
    },
    findById: function( req, res ) {
        db.Comment
            .findById( req.params.id )
            .populate( 'user' )
            .populate( 'artwork' )
            .populate( 'event' )
                .then( dbModel => {
                    if(
                        dbModel.public
                        || (
                            req.user
                            && (
                                req.user.type === 'admin'
                                || req.user._id == dbModel.user
                            )
                        )
                    ){
                        return res.json( dbModel );
                    } else {
                        return res.status( 403 ).json( {
                            error: 'Forbidden'
                        } );
                    }
                } )
                .then( dbModel => res.json( dbModel ) )
                .catch( err => res.status( 422).json( err ) );
    },
    findByUserId: function( req, res ) {
        db.Comment
            .find( { user: req.params.id } )
            .populate( 'user' )
            .populate( 'artwork' )
            .populate( 'event' )
                .then( dbModel => {
                    return dbModel.filter( function( pValue ) {
                        let lKeepElement = false;
                        if (
                            pValue.public
                            || (
                                req.user
                                && (
                                    req.user.type === 'admin'
                                    || req.user._id == pValue.user
                                )
                            )
                        ) {
                            lKeepElement = true;
                        }
                        return lKeepElement;
                    } );
                 } )
                .then( dbModel => res.json( dbModel ) )
                .catch( err => res.status( 422 ).json( err ) );
    },
    findByArtworkId: function( req, res ) {
        db.Comment
            .find( { artwork: req.params.id } )
            .populate( 'user' )
            .populate( 'artwork' )
            .populate( 'event' )
                .then( dbModel => {
                    return dbModel.filter( function( pValue ){
                        let lKeepElement= false;
                        if (
                            pValue.public
                            || (
                                req.user
                                && (
                                    req.user.type === 'admin'
                                    || req.user._id == pValue.user
                                )
                            )
                        ) {
                            lKeepElement = true;
                        }
                    } );
                } ) 
                .then( dbModel => res.json( dbModel ) )
                .catch( err => res.status( 422 ).json( err ) );
    },
    findByEventId: function( req, res ) {
        db.Comment
            .find( { event: req.params.id } )
            .populate( 'user' )
            .populate( 'artwork' )
            .populate( 'event' )
                .then( dbModel => {
                    return dbModel.filter( function( pValue ) {
                        let lKeepElement= false ;
                        if (
                            pValue.public
                            || (
                                req.user
                                && (
                                    req.user.type === 'admin'
                                    || req.user._id == pValue.user
                                )
                            )    
                        ) {
                            lKeepElement = true;
                        }
                        return lKeepElement;
                    } );
                } )
                .then( dbModel => res.json( dbModel ) )
                .catch( err => res.status( 422 ).json( err ) );
    },
    create: function( req, res ) {
        let lRequestBody = { ...req.body };
        if ( req.user ){
            if ( req.user.type !== 'admin' ){
                lRequestBody.user = req.user._id;
                lRequestBody.public = false;
            }
        db.Comment
            .create( req.body )
                .then( dbModel => res.json( dbModel ) )
                .catch( err => res.status( 422 ).json( err ) );
        } else {
            return res.status  ( 401 ).json( {
                error: 'Unauthorized'
            } );
        }
    },
    update: function( req, res ) {
        let lRequestBody = { ...req.body };
        if ( req.user ){
            if( req.user ){
                if ( req.user.type !== 'admin' ){
                    delete lRequestBody.user;
                    delete lRequestBody.public;
                }
            }
        db.Comment
            .findOneAndUpdate( { _id: req.params.id }, req.body )
                .then( dbModel => res.json( dbModel ) )
                .catch( err => res.status( 422 ).json( err ) );
        } else {
            return res.status( 401 ).json( {
                error: 'Unauthorized'
            } );
        }        
    },
    remove: function( req, res ) {
        if ( req.user ) {
        db.Comment
            .findById( { _id: req.params.id } )
                .then( ( dbModel )  => {
                    if ( req.user._id === dbModel.user || req.user.type === 'admin' ){
                        return res.json( dbMode.remove() ); 
                    } else {
                        return res.status( 403 ).json( {
                            error: 'Forbidden'
                        } );
                    }
                } )
                // .then( dbModel => res.json( dbModel ) )
                .catch( err => res.status( 422 ).json( err ) );
        } else {
            return res.status( 401 ).json( {
                error: 'Unauthorized'
            } );
        }
    }
};
