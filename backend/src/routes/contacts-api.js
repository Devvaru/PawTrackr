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

// Add New Contact
router.post('/', (req, res) => {
  const newContact = req.body;
  newContact.user_id = 1;

  contactQueries
    .addContact(newContact)
    .then(() => {
      res.json('Contact added successfully! 😃');
    })
    .catch((err) => {
      console.error({ err });
      res.status(500).json({ error: 'Failed to add contact! ☹️' });
    });
});

// Delete Contact
router.delete('/:id', (req, res) => {
  const contactId = req.params.id;

  contactQueries
    .deleteContact(contactId)
    .then(() => {
      res.json('Contact removed successfully! 😃');
    })
    .catch((err) => {
      console.error({ err });
      res.status(500).json({ error: 'Failed to remove contact! ☹️' });
    });
});

module.exports = router;