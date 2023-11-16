const express = require('express');
const router = express.Router();
const reminderQueries = require('../db/queries/allQueries');

// Reminders Listing Page
router.get('/', (req, res) => {
  reminderQueries
    .getReminders()
    .then((reminders) => {
      res.json(reminders);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;