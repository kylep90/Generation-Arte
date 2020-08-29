const router = require( 'express' ).Router();
const eventController = require( '../../controllers/eventController' );
const commentController = require( '../../controllers/commentController' );
const likeController = require( '../../controllers/likeController' );

// !! The api/index.js file will import this file to be mounted in the
// !! /api/event route so no need to set the full route below

router.route( "/" )
    .get( eventController.findAll )
    .post( eventController.create );  

router
    .route( "/:id" )
    .get( eventController.findById )
    .put( eventController.update )
    .delete( eventController.remove );

router.route( '/:id/comments' )
    .get( commentController.findByEventId );
router.route( '/:id/likes' )
    .get( likeController.findByEventId );


module.exports = router;
