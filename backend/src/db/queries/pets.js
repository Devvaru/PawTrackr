const db = require('../connection');

const getPets = () => {
  return db.query('SELECT * FROM pets;')
    .then(data => {
      return data.rows;
    });
};

module.exports = { getPets };