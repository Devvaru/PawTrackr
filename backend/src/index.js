const PORT = 8080;
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
app.use(cors());
const morgan = require('morgan');

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static('public'));

// Separate Routes
const petApiRoutes = require('./routes/pets-api');
const reminderApiRoutes = require('./routes/reminders-api');
const contactApiRoutes = require('./routes/contacts-api');

// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use('/api/pets', petApiRoutes);
app.use('/api/reminders', reminderApiRoutes);
app.use('/api/contacts', contactApiRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the back end! 😃');
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}! 😃`));
