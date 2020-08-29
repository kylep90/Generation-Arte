const router = require("express").Router();
const bookRoutes = require("./books");
const usersRoutes = require( './users' );
const artworksRoutes = require( './artworks' );
const commentsRoutes = require( './comments' );
const likesRoutes = require( './likes' );

// Book routes
router.use("/books", bookRoutes);

router.use( '/users', usersRoutes );
router.use( '/artworks', artworksRoutes );
router.use( '/comments', commentsRoutes );
router.use( '/likes', likesRoutes );

module.exports = router;
