const express = require( 'express' );
const mongoose = require( 'mongoose' );
const morgan = require( 'morgan' );

// SECTION Express Setup
const app = express();
// Use the PORT environment variable if available, otherwise use 3001
const PORT = process.env.PORT || 3001;
// Enable parsing of URL-Encoded request bodies (Standard HTML forms)
app.use( express.urlencoded( { extended: true } ) );
// Enable parsing of JSON request
app.use( express.json() );
// Enable request logging. According to th docs, 'dev' means
// concise output colored by response status for development use.
// See https://github.com/expressjs/morgan#dev
app.use( morgan( 'dev' ) );
// !SECTION Express Setup

// Serve up static assets (usually on heroku)
// On development static assets will be served by the React Development server
if ( process.env.NODE_ENV === 'production' ) {
    app.use( express.static( 'client/build' ) );
}

const routes = require( './routes' );
// Add routes, both API and view
app.use( routes );

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/reactreadinglist';
// Connect to the Mongo DB
mongoose.connect( MONGODB_URI );

// Start the API server
// SECTION Express Start
// !! The PORT variable must be declared above
app.listen( PORT, function(){
    console.log( `INFO: Listening on port ${PORT}` );
    console.log( `INFO: Visit http://localhost:${PORT}` );
} );
// !SECTION Express Start
