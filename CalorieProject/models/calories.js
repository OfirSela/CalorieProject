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

const calorieSchema = new mongoose.Schema(
{
    user_id: String,
    year: Number,
    month: Number,
    day: Number,
    id: {
        type: Number,
        default: function(){Math.floor(Math.random() * 1000);}
    },
    description: String,
    category: String,
    amount: Number
}
);

const Calorie = mongoose.model('Calorie', calorieSchema);

module.exports = Calorie;
