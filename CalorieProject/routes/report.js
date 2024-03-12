/**
 * Developer(s):
 * First Name: Ofir
 * Last Name: Salomon
 * ID: 304845688
 *
 * Project: Calorie Tracker API
 * Description: This file (purpose of the file, e.g., sets up the Express server and routes).
 */

const express = require('express');
const router = express.Router();
const { MongoClient } = require('mongodb');
const Calorie = require('../models/calories');

router.get('/', async (req, res) => {
    const { user_id, year, month } = req.query;
    const caloriesCategories = { breakfast: [], lunch: [], dinner: [], other: [] };

    try {
        const report = await Calorie.find({year, month, user_id}).select("day description amount category");
        report.forEach(calorie => {
            const entry = {
                day: calorie.day,
                description: calorie.description,
                amount: calorie.amount
            };
            const currentCalorieCategory = calorie.category;
            // Check if the category exists, otherwise default to "other"
            if (!caloriesCategories[currentCalorieCategory]) {
                console.warn(`Undefined category '${currentCalorieCategory}' for calorie entry. Defaulting to 'other'.`);
                caloriesCategories['other'].push(entry);
            } else {
                caloriesCategories[currentCalorieCategory].push(entry);
            }          
        });
        res.status(200).json(caloriesCategories);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});


module.exports = router;