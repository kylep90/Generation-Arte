const router = require("express").Router();
const bookRoutes = require("./books");
const usersRoutes = require( './users' );
const artworksRoutes = require( './artworks' );
const commentsRoutes = require( './comments' );
const likesRoutes = require( './likes' );
const eventRoutes = require( './events' );

// Book routes
router.use("/books", bookRoutes);

router.use( '/users', usersRoutes );
router.use( '/artworks', artworksRoutes );
router.use( '/comments', commentsRoutes );
router.use( '/likes', likesRoutes );
router.use( '/events', eventRoutes );

module.exports = router;
