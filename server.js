
// Import the Express library and the database connection module
const express = require('express');
const db = require('./config/connection');

// Import the application routes
const routes = require('./routes')

// Create a new Express app
const app = express();

// Set the port to listen to, either the one specified in the environment or 3001
const PORT = process.env.PORT || 3001;

// Middleware to parse request bodies as JSON
app.use(express.json());

// Middleware to parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Use the application routes
app.use(routes);

// Listen for the database connection to open, then start the server
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on localhost:${PORT}!`);
  });
});
