const PORT = 8080;
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());

// Separated Routes for each Resource
const petApiRoutes = require('./routes/pets-api');

// Mount all resource routes
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use('/api/pets', petApiRoutes);

app.get("/", (req, res) => {
    return res.text("Welcome to the back end");
})

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));