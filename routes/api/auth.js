const router = require( 'express' ).Router();
const passport = require( '../../config/passport' );

router.route( '/login' )
    .post(
        passport.authenticate( 'local' ),
        function( req, res ) {
            res.json( req.user );
        }
    );
router.route( '/logout' )
    .get( function( req, res ) {
        req.logout();
        res.redirect( '/' );
    } );
module.exports = router;