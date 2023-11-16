const express = require('express');
const router = express.Router();
const contactQueries = require('../db/queries/allQueries');

// Contacts Listing Page
router.get('/', (req, res) => {
  contactQueries
    .getContacts()
    .then((contacts) => {
      res.json(contacts);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;