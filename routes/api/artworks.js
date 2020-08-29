const router = require( 'express' ).Router();
const artworkController = require( '../../controllers/artworkController' );
const commentController = require( '../../controllers/commentController' );
const likeController = require( '../../controllers/likeController' );

// !! The api/index.js file will import this file to be mounted in the
// !! /api/artworks route so no need to set the full route below

router.route( "/" )
    .get( artworkController.findAll )
    .post( artworkController.create );  

router
    .route( "/:id" )
    .get( artworkController.findById )
    .put( artworkController.update )
    .delete( artworkController.remove );

router.route( '/:id/comments' )
    .get( commentController.findByArtworkId );
router.route( '/:id/likes' )
    .get( likeController.findByArtworkId );


module.exports = router;
