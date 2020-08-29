const router = require( 'express' ).Router();
const userController = require( '../../controllers/userController' );
const artworkController = require( '../../controllers/artworkController' );
const commentController = require( '../../controllers/commentController' );
const likeController = require( '../../controllers/likeController' );
const eventController = require ( '../../controllers/eventController' ) 

// !! The api/index.js file will import this file to be mounted in the
// !! /api/users route so no need to set the full route below

// Matches with "/api/users"
router.route( "/" )
    .get( userController.findAll )
    .post( userController.create );

// Matches with "/api/users/:id"
router.route( "/:id" )
    .get( userController.findById )
    .put( userController.update )
    .delete( userController.remove );

router.route( '/:id/artworks' )
    .get( artworkController.findByUserId );
router.route( '/:id/events' )
    .get( eventController.findByUserId );
router.route( '/:id/comments' )
    .get( commentController.findByUserId );
router.route( '/:id/likes' )
    .get( likeController.findByUserId );

module.exports = router;
