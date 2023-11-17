const db = require('../connection');

const getPets = () => {
  return db.query('SELECT * FROM pets;')
    .then(data => {
      return data.rows;
    });
};

const addPet = (pet) => {
  const { user_id, name, pet_img_url, date_of_birth, variant, weight, food, comment } = pet;
  // Add RETURNING *; to the end of an INSERT query to return the objects that were inserted. This is handy when you need the auto generated id of an object you've just added to the database
  return db.query('INSERT INTO pets (user_id, name, pet_img_url, date_of_birth, variant, weight, food, comment) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;',
    [user_id, name, pet_img_url, date_of_birth, variant, weight, food, comment])
    .then(data => {
      return data.rows[0];
    });
};

const getReminders = () => {
  return db.query('SELECT * FROM reminders ORDER BY date;')
    .then(data => {
      return data.rows;
    });
};

const addReminder = (reminder) => {
  const { pet_id, title, date, comment } = pet;
  // Add RETURNING *; to the end of an INSERT query to return the objects that were inserted. This is handy when you need the auto generated id of an object you've just added to the database
  return db.query('INSERT INTO reminders (pet_id, title, date, comment) VALUES ($1, $2, $3, $4) RETURNING *;',
    [pet_id, title, date, comment])
    .then(data => {
      return data.rows[0];
    });
};

const getContacts = () => {
  return db.query('SELECT * FROM contacts;')
    .then(data => {
      return data.rows;
    });
};

module.exports = { getPets, addPet, getReminders, addReminder, getContacts };