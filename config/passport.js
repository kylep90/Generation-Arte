const passport = require ( 'passport' );
const LocalStrategy = require ( 'passport-local' ).Strategy;
const db = require( '../models' );

passport.use( new LocalStrategy(
    {
        usernameField: 'email'
    },
    function ( pEmail, pPassword, pDone ){
        db.User
        .findOne ( { email: pEmail } )
        .then( ( pUser )  => {
            if ( pUser && pUser.isPasswordValid( pPassword )){
                return pDone( null, pUser );
            } else {
                return pDone( null, false, {
                    message: 'Incorrect email or password'
                } ); 
            }
        });
    }
) );

passport.serializeUser( function( pUser, pCallback ) {
    pCallback( null, pUser );
} );
passport.deserializUser( function( pUser, pCallback ) {
    pCallback( null, pUser );
} );

module.exports = passport;