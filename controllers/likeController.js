const db = require( '../models' );

module.exports = {
    findAll: function( req, res ) {
        db.Like
            .find( req.query )
            .populate( 'user' )
            .populate( 'artwork' )
            .sort( { email: 1 } )
                .then( dbModel => res.json( dbModel ) )
                .catch( err => res.status( 422 ).json( err ) );
    },
    findById: function( req, res ) {
        db.Like
            .findById( req.params.id )
            .populate( 'user' )
            .populate( 'artwork' )
                .then( dbModel => res.json( dbModel ) )
                .catch( err => res.status( 422).json( err ) );
    },
    findByUserId: function( req, res ) {
        db.Like
            .find( { user: req.params.id } )
            .populate( 'user' )
            .populate( 'artwork' )
                .then( dbModel => res.json( dbModel ) )
                .catch( err => res.status( 422 ).json( err ) );
    },
    findByArtworkId: function( req, res ) {
        db.Like
            .find( { artwork: req.params.id } )
            .populate( 'user' )
            .populate( 'artwork' )
                .then( dbModel => res.json( dbModel ) )
                .catch( err => res.status( 422 ).json( err ) );
    },
    create: function( req, res ) {
        db.Like
            .create( req.body )
                .then( dbModel => res.json( dbModel ) )
                .catch( err => res.status( 422 ).json( err ) );
    },
    update: function( req, res ) {
        db.Like
            .findOneAndUpdate( { _id: req.params.id }, req.body )
                .then( dbModel => res.json( dbModel ) )
                .catch( err => res.status( 422 ).json( err ) );
    },
    remove: function( req, res ) {
        db.Like
            .findById( { _id: req.params.id } )
                .then( dbModel => dbModel.remove() )
                .then( dbModel => res.json( dbModel ) )
                .catch( err => res.status( 422 ).json( err ) );
    }
};