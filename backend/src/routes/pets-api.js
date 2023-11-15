const express = require('express');
const router  = express.Router();
const petQueries = require('../db/queries/pets');

// Pets Listing Page
router.get('/', (req, res) => {
  petQueries.getPets()
    .then(pets => {
      console.log(pets);
      res.json(pets);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;