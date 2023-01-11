require('dotenv').config();

const express = require("express");
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const mongoose = require('mongoose');
var cors = require('cors');
const mongoString = process.env.dbUrl;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(`Error connecting with database - ${error}`)
})

database.once('connected', () => {
    console.log('Database is Connected');
})

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/v1', routes);

app.listen(port, () => {
  console.log(`Server is listening on port - ${port}`);
});
