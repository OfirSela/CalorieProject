/**
 * Developer(s):
 * First Name: Ofir
 * Last Name: Salomon
 * ID: 304845688
 *
 * Project: Calorie Tracker API
 * Description: This file (purpose of the file, e.g., sets up the Express server and routes).
 */
const Calorie = require('../models/calories');
const express = require('express');
const router = express.Router();


router.post('/', async (req, res) => {
  try {
    const { 
      user_id,
      year,
      month,
      day,
      description,
      category,
      amount} = req.body;
      const newCalorie = new Calorie (
      {
        user_id,
        year,
        month,
        day,
        description,
        category,
        amount
      }
      );

      await newCalorie.save();
      res.status(201).json(newCalorie);
  }
  catch
    (error)
    {
      res.status(500).json({error: error.message});
    }
  });

module.exports= router;


