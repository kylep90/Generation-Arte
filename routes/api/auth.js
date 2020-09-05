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
        return res.status( 200 ).json( {
            message: "Success" 
        } ) 
    } );
router.route ( '/me' )
    .get(
        function( req, res ) {
            if ( req.user ) {
                return res.json( req.user );
            } else {
                return res.status( 401 ).json( {
                    error: 'Unauthorized'
                } );
            }
        }
    );    
module.exports = router;