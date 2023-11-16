const PORT = 8080;
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const morgan = require('morgan');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Allow all origins for testing purposes (make more restrictive in production)
// app.options('*', cors());

// Separated Routes
const petApiRoutes = require('./routes/pets-api');

// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use('/api/pets', petApiRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the back end");
})

app.use(express.static('public'));

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));