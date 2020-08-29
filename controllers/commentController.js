const db = require( '../models' );

module.exports = {
    findAll: function( req, res ) {
        db.Comment
            .find( req.query )
            .populate( 'user' )
            .populate( 'artwork' )
            .sort( { email: 1 } )
                .then( dbModel => res.json( dbModel ) )
                .catch( err => res.status( 422 ).json( err ) );
    },
    findById: function( req, res ) {
        db.Comment
            .findById( req.params.id )
            .populate( 'user' )
            .populate( 'artwork' )
                .then( dbModel => res.json( dbModel ) )
                .catch( err => res.status( 422).json( err ) );
    },
    findByUserId: function( req, res ) {
        db.Comment
            .find( { user: req.params.id } )
            .populate( 'user' )
            .populate( 'artwork' )
                .then( dbModel => res.json( dbModel ) )
                .catch( err => res.status( 422 ).json( err ) );
    },
    findByArtworkId: function( req, res ) {
        db.Comment
            .find( { artwork: req.params.id } )
            .populate( 'user' )
            .populate( 'artwork' )
                .then( dbModel => res.json( dbModel ) )
                .catch( err => res.status( 422 ).json( err ) );
    },
    create: function( req, res ) {
        db.Comment
            .create( req.body )
                .then( dbModel => res.json( dbModel ) )
                .catch( err => res.status( 422 ).json( err ) );
    },
    update: function( req, res ) {
        db.Comment
            .findOneAndUpdate( { _id: req.params.id }, req.body )
                .then( dbModel => res.json( dbModel ) )
                .catch( err => res.status( 422 ).json( err ) );
    },
    remove: function( req, res ) {
        db.Comment
            .findById( { _id: req.params.id } )
                .then( dbModel => dbModel.remove() )
                .then( dbModel => res.json( dbModel ) )
                .catch( err => res.status( 422 ).json( err ) );
    }
};
