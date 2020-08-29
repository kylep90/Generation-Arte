const router = require( 'express' ).Router();
const controller = require( '../../controllers/commentController' );

// !! The api/index.js file will import this file to be mounted in the
// !! /api/comments route so no need to set the full route below

router.route( "/" )
    .get( controller.findAll )
    .post( controller.create );

router
    .route( "/:id" )
    .get( controller.findById )
    .put( controller.update )
    .delete( controller.remove );

module.exports = router;
