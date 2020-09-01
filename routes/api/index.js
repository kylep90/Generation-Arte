const router = require("express").Router();
const bookRoutes = require("./books");
const usersRoutes = require( './users' );
const artworksRoutes = require( './artworks' );
const commentsRoutes = require( './comments' );
const likesRoutes = require( './likes' );
const eventRoutes = require( './events' );
const authRoutes = require( './auth' );

// Book routes
router.use("/books", bookRoutes);

router.use( '/users', usersRoutes );
router.use( '/artworks', artworksRoutes );
router.use( '/comments', commentsRoutes );
router.use( '/likes', likesRoutes );
router.use( '/events', eventRoutes );
router.use( '/auth', authRoutes);


module.exports = router;
