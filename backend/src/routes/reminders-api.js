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

// Add New Reminder
router.post('/', (req, res) => {
  const newReminder = req.body;
  // newReminder.user_id = 1; // TODO: implement later

  reminderQueries
    .addReminder(newReminder)
    .then((result) => {
      console.log({ result });
      res.json('Reminder added successfully! 😃');
    })
    .catch((err) => {
      console.error({ err });
      res.status(500).json({ error: 'Failed to add reminder! ☹️' });
    });
});

// Edit Reminder Done Field
router.put('/:id', (req, res) => {
  const reminderId = req.params.id;
  console.log('reminderId', reminderId)

  reminderQueries
    .editReminderDone(reminderId)
    .then((result) => {
      console.log("result", { result });
      res.json('Reminder edited successfully! 😃');
    })
    .catch((err) => {
      console.error({ err });
      res.status(500).json({ error: 'Failed to edit reminder! ☹️' });
    });
});

module.exports = router;
