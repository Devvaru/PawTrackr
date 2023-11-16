const express = require('express');
const router  = express.Router();
const petQueries = require('../db/queries/pets');

// Pets Listing Page
router.get('/', (req, res) => {
  petQueries.getPets()
    .then(pets => {
      res.json(pets);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

// users should be able to create a new pet
router.post("/", (req, res) => {
  // const userId = req.session.user_id;
  console.log(req);
  const newPet = req.body;
  console.log({newPet});
  newPet.user_id = 1;
  petQueries.addPet(newPet)
    .then((result) => {
      console.log({result});
      res.json('It works!!');
      // res.redirect('/');
    })
    .catch(err => {
      console.log({err});
      res
        .status(500)
        .json({ error: err.message });
    });
});


module.exports = router;