const express = require('express');
const router = express.Router();
const reminderQueries = require('../db/queries/allQueries');

// Reminders - Get All
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

// Reminders - Upcoming listing
router.get('/upcoming', (req, res) => {
  reminderQueries
    .getUpcomingReminders()
    .then((reminders) => {
      res.json(reminders);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// Reminders - Completed listing
router.get('/completed', (req, res) => {
  reminderQueries
    .getCompletedReminders()
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

  reminderQueries
    .addReminder(newReminder)
    .then(() => {
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

  reminderQueries
    .editReminderDone(reminderId)
    .then(() => {
      res.json('Reminder edited successfully! 😃');
    })
    .catch((err) => {
      console.error({ err });
      res.status(500).json({ error: 'Failed to edit reminder! ☹️' });
    });
});

// Get Single Pet Reminders
router.get('/:id', (req, res) => {
  const petId = req.params.id;
  reminderQueries
    .getPetReminders(petId)
    .then((reminders) => {
      res.json(reminders);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
