/**
 * Developers:
 * First Name: Ofir
 * Last Name: Salomon
 * ID: 304845688
 *
 */

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    { firstname: "Ofir ", lastname: "Salomon", id: 304845688, email: "selaofir7@gmail.com" },
    { firstname: "", lastname: "", id: 1, email: "@gmail.com" }
  ]);
});

module.exports = router;
