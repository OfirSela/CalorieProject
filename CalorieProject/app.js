/**
 * Developers:
 * First Name: Ofir
 * Last Name: Salomon
 * ID: 304845688
 *
 */

// Import the required modules
const express = require('express');
const mongoose = require('mongoose');

// Import route handlers
const addcalories = require('./routes/addcalories');
const about = require('./routes/about');
const report = require('./routes/report');
const index = require('./routes/index');

// Create an Express application
const app = express();

// Set Pug as the view engine
app.set('view engine', 'pug');

// Middleware to parse JSON bodies
app.use(express.json());

// MongoDB connection string
const uri = "mongodb+srv://selaofir7:1424@cluster0.3rkyhel.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


// Connect to MongoDB using Mongoose
mongoose.connect(uri, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  }).then(() => {
    console.log('Connected to database.');
  }).catch(err => {
    console.log(`Failed to connect ${err}`);
  });
  
  // Define the port to listen on, default to 1500 if not specified in the environment
  const port = process.env.PORT || 1500;
  
  // Start the server
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  
  // Define routes with their base paths
  app.use('/addcalories', addcalories); // Route for adding calories
  app.use('/about', about); // Route for about information
  app.use('/report', report); // Route for generating reports
  app.use('/', index); // Route for the index page
  
  // Export the Express application
  module.exports = app;

