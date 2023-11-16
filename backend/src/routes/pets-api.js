const express = require('express');
const router = express.Router();
const petQueries = require('../db/queries/pets');

// Pets Listing Page
router.get('/', (req, res) => {
  petQueries
    .getPets()
    .then((pets) => {
      res.json(pets);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// Add New Pet
router.post('/', (req, res) => {
  const newPet = req.body;
  newPet.user_id = 1;

  // Ensure that "weight" is an array
  if (!Array.isArray(newPet.weight)) {
    // If it's not an array, convert it to an array
    newPet.weight = [newPet.weight];
  }

  petQueries
    .addPet(newPet)
    .then((result) => {
      console.log({ result });
      res.json('Pet added successfully! 😃');
    })
    .catch((err) => {
      console.error({ err });
      res.status(500).json({ error: 'Failed to add pet! ☹️' });
    });
});

module.exports = router;
