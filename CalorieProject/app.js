/**
 * Developer(s):
 * First Name: Ofir
 * Last Name: Salomon
 * ID: 304845688
 *
 * Project: Calorie Tracker API
 * Description: Main application entry point. Initializes the Express application, 
 * sets up middleware, connects to the MongoDB database, and defines the application routes.
 */

const express = require('express');
const mongoose = require('mongoose');
const addcalories = require('./routes/addcalories');
const about = require('./routes/about');
const report = require('./routes/report');
const index = require('./routes/index');

const app = express();
app.use(express.json()); // For parsing application/json
const uri = "mongodb+srv://selaofir7:1424@cluster0.3rkyhel.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>
{console.log('Connected to database.');}).catch(err=>{
    console.log(`failed to connect ${err}`);
});

const port = process.env.PORT || 1500;
app.listen(port, () => {
console.log(`Server running on port ${port}`);
});

// Use the routes with their respective base paths
app.use('/addcalories', addcalories); // For calories related endpoints
app.use('/about', about); // For the about endpoint
app.use('/report', report); // For the report endpoint
app.use('/index', index); // For the index endpoint


module.exports = app;

