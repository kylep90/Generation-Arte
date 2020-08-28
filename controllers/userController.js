const db = require('../models');

module.exports = {
    findAll: function( req, res  ){
        db.User
          .find( req.query )
          .sort( { email:1} )
          .then( dbModel => res.json( dbModel ) )
          .catch( err => res.status( 422 ).json( err ) );   
    },
    findById: function ( req, res ){
        db.User
          .findById( req.params.id )
          .then( dbModel => res.json( dbModel ) ) 
          .catch( err => res.status( 422 ).json( er ) );
    }
    findByIdIncludeArtworks: function( req, res ) {
        db.User
          .findById( req.params.id )
          .populate( 'artworks' )
          .then( dbModel => res.json ( dbModel ) )
          .catch( err => res.status ( 422 ).json( err ) );  
    },
    findByIdIncludeComments: function( req, res ) {
        db.User
          .findById( req.params.id )
          .populate( 'comments' )
          .then( dbModel => res.json( dbModel ))
          .catch( err => res.status( 422 ).json( err ) );
    },
    findByIdIncludeLikes: function ( req, res ) {
        db.User
          .findById( req.params.id )
          .populate( 'likes' )
          .then( dbModel => res.json( dbModel ) )
          .catch( err => res.status( 422 ).json( err ) );
    },
    findByIdIncludeAll: function ( req, res ) {
        db.User
            .findById( req.params.id )
            .populate( 'artworks' )
            .populate( 'comments' )
            .populate( 'likes' )
            .then( dbModel => res.json( dbModel ) ) 
            .catch( err => res.status( 422 ).json( err ) );
    },
    create : function ( req, res ) {
        db.User
          .create( req.body )
          .then( dbModel => res.json( dbModel ) )
          .catch( err => res.status( 422 ).json( err ) );
    },
    update: function ( req, res ){
        db.User
          .findOneAndUpdate( { _id: req .params.id }, req.body )
          .then( dbModel => res.json( dbModel ) )
          .catch( err => res.status( 422 ).json( err ) );    
    },
    remove: function ( req, res ) {
        db.User
          .findById( { _id: req.params.id } )
          .then( dbModel => dbModel.remove() )
          .then( dbModel => res.json( dbModel ) )
          .catch( err => res.status( 422 ).json( err ) );
    }
};