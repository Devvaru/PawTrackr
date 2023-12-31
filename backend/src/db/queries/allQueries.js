const db = require('../connection');

const getPets = () => {
  return db.query('SELECT * FROM pets;').then((data) => {
    return data.rows;
  });
};

const addPet = (pet) => {
  const {
    user_id,
    name,
    pet_img_url,
    date_of_birth,
    variant,
    weight,
    food,
    comment,
  } = pet;
  // Add RETURNING *; to the end of an INSERT query to return the objects that were inserted. This is handy when you need the auto generated id of an object you've just added to the database
  return db
    .query(
      'INSERT INTO pets (user_id, name, pet_img_url, date_of_birth, variant, weight, food, comment) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;',
      [
        user_id,
        name,
        pet_img_url,
        date_of_birth,
        variant,
        weight,
        food,
        comment,
      ]
    )
    .then((data) => {
      return data.rows[0];
    });
};

const getPetReminders = (id) => {
  // Add RETURNING *; to the end of an INSERT query to return the objects that were inserted. This is handy when you need the auto generated id of an object you've just added to the database
  return db
    .query(
      'SELECT pets.name, reminders.title, reminders.date, reminders.comment FROM pets JOIN reminders ON pets.id = reminders.pet_id WHERE pets.id = $1 AND reminders.done=false ORDER BY reminders.date;',
      [id]
    )
    .then((data) => {
      return data.rows;
    });
};

const getReminders = () => {
  return db.query('SELECT * FROM reminders;').then((data) => {
    return data.rows;
  });
};

const getUpcomingReminders = () => {
  return db.query('SELECT pets.name as pet_name, reminders.* FROM pets JOIN reminders ON pets.id = reminders.pet_id WHERE reminders.done = false ORDER BY date;')
    .then((data) => {
      return data.rows;
    });
};

const getCompletedReminders = () => {
  return db.query('SELECT pets.name, reminders.* FROM pets JOIN reminders ON pets.id = reminders.pet_id WHERE reminders.done = true ORDER BY date;')
    .then((data) => {
      return data.rows;
    });
};

const addReminder = (reminder) => {
  const { pet_id, title, date, comment } = reminder;
  // Add RETURNING *; to the end of an INSERT query to return the objects that were inserted. This is handy when you need the auto generated id of an object you've just added to the database
  return db
    .query(
      'INSERT INTO reminders (pet_id, title, date, comment) VALUES ($1, $2, $3, $4) RETURNING *;',
      [pet_id, title, date, comment]
    )
    .then((data) => {
      return data.rows[0];
    });
};

const editReminderDone = (reminderId) => {
  return db
    .query('UPDATE reminders SET done=true WHERE id = $1 RETURNING *;', [reminderId])
    .then(() => {
      return { message: 'Reminder edited successfully' };
    });
};

const getContacts = () => {
  return db.query('SELECT * FROM contacts;').then((data) => {
    return data.rows;
  });
};

const addContact = (contact) => {
  const { user_id, name, phone_number, email, website } = contact;
  // Add RETURNING *; to the end of an INSERT query to return the objects that were inserted. This is handy when you need the auto generated id of an object you've just added to the database
  return db
    .query(
      'INSERT INTO contacts (user_id, name, phone_number, email, website) VALUES ($1, $2, $3, $4, $5) RETURNING *;',
      [user_id, name, phone_number, email, website]
    )
    .then((data) => {
      return data.rows[0];
    });
};

const deleteContact = (contactId) => {
  return db
    .query('DELETE FROM contacts WHERE id = $1 RETURNING *;', [contactId])
    .then(() => {
      return { message: 'Contact deleted successfully' };
    });
};

module.exports = { getPets, addPet, getPetReminders, getReminders, getUpcomingReminders, getCompletedReminders, addReminder, editReminderDone, getContacts, addContact, deleteContact };
