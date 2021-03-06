const db = require('../models');

module.exports = {
    findAll: function( req, res ) {
        db.Event
            .find(req.query)
            .where( { public:true } )
            .populate( 'user' )
            .populate( 'commentsCount' )
            .populate( 'likesCount' )
            .sort( { email: 1 } )
                .then( dbModel => res.json( dbModel ) )
                .catch( err => res.status( 422 ).json( err ) );
    },
    findById: function( req, res ) {
        db.Event
            .findById( req.params.id )
            .populate( 'user' )
            .populate( 'commentsCount' )
            .populate( 'likesCount' )
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
                    }else {
                        return res.status( 403 ).json( {
                            error: 'Forbidden'
                        } );
                    }
                } )
                // .then( dbModel => res.json( dbModel ))
                .catch( err => res.status( 422 ).json( err ));
    },
    findByUserId: function( req, res ) {
        db.Event
            .find( { user: req.params.id } )
                .populate( 'commentsCount' )
                .populate( 'likesCount' )
                .then( dbModel => {
                    return dbModel.filter( function( pValue ){
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
                    });
                })
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
            
            db.Event
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
            if ( req.user.type !== 'admin' ){}
            delete lRequestBody.user;
            delete lRequestBody.public;
        db.Event
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
        if ( req.user ){
        db.Event
            .findById( { _id: req.params.id } )
            .then( ( dbModel ) => {
                if ( req.user._id === dbModel.user || req.user.type  === 'admin' ) {
                    return res.json( dbModel.remove () );
                } else {
                    return res.status( 403 ).json( {
                        error: 'Forbiden'
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
