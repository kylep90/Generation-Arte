module.exports = function( pRedirectPath ){
    return function( req, res, next ) {
        if ( req.user ) {
            return next();
        } else {
            if ( pRedirectPath ) {
                return res.redirect( pRedirectPath );
            } else {
                return res.status(401).json( {
                    error: 'Unauthorized'
                } );
            } 
         }
    }
};