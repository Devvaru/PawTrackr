// require('dotenv').config()

const PORT = 8080;
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to the back end");
})

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));