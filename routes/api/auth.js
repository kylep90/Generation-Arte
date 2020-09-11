const router = require( 'express' ).Router();
const passport = require( '../../config/passport' );
const db = require( '../../models' );

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
                db.User
                    .findById( req.user._id )
                    .select( [ '-password' ] )
                    .populate( 'likesCount' )
                    .populate( 'commentsCount' )
                    .populate( 'artworksCount')
                        .then( dbModel => res.json( dbModel ) )
                        .catch( err => res.status( 422 ).json( err ) );
                        
            } else {
                return res.status( 401 ).json( {
                    error: 'Unauthorized'
                } );
            }
        }
    );    
module.exports = router;