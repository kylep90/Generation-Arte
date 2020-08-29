const db = require('../models');

module.exports = {
    findAll: function( req, res ) {
        db.Artwork
            .find(req.query)
            .populate( 'user' )
            .populate( 'commentsCount' )
            .populate( 'likesCount' )
            .sort( { email: 1 } )
                .then( dbModel => res.json( dbModel ) )
                .catch( err => res.status( 422 ).json( err ) );
    },
    findById: function( req, res ) {
        db.Artwork
            .findById( req.params.id )
            .populate( 'user' )
            .populate( 'commentsCount' )
            .populate( 'likesCount' )
                .then( dbModel => res.json( dbModel ))
                .catch( err => res.status( 422 ).json( err ));
    },
    findByUserId: function( req, res ) {
        db.Artwork
            .find( { user: req.params.id } )
                .populate( 'commentsCount' )
                .populate( 'likesCount' )
                .then( dbModel => res.json( dbModel ) )
                .catch( err => res.status( 422 ).json( err ) );
    },
    create: function( req, res ) {
        db.Artwork
            .create( req.body )
            .then( dbModel => res.json( dbModel ) )
            .catch( err => res.status( 422 ).json( err ) );
    },
    update: function( req, res ) {
        db.Artwork
            .findOneAndUpdate( { _id: req.params.id }, req.body )
                .then( dbModel => res.json( dbModel ) )
                .catch( err => res.status( 422 ).json( err ) );
    },
    remove: function( req, res ) {
        db.Artwork
            .findById( { _id: req.params.id } )
            .then( dbModel => dbModel.remove() )
                .then( dbModel => res.json( dbModel ) )
                .catch( err => res.status( 422 ).json( err ) );
    }
};
