/**
 * Developers:
 * First Name: Ofir
 * Last Name: Salomon
 * ID: 304845688
 *
 */

// Import the mongoose package to interact with MongoDB
const mongoose = require('mongoose');

// Define a schema for the user collection
const userSchema = new mongoose.Schema({
    id: String, // Unique identifier for the user
    first_name: String, // User's first name
    last_name: String, // User's last name
    birthday: Date // User's date of birth
});

// Create a model from the schema
const User = mongoose.model('User', userSchema);

// Export the User model for use in other parts of the application
module.exports = User;
