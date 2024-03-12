/**
 * Developer(s):
 * First Name: Ofir
 * Last Name: Salomon
 * ID: 304845688
 *
 * Project: Calorie Tracker API
 * Description: 
 */

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
{
    id: String,
    first_name: String,
    last_name: String,
    birthday: Date
}
);

const User = mongoose.model('User', userSchema);

module.exports = User;