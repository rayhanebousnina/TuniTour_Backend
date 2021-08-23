// Importing Express Js

const express = require("express");
const app = express();
const db = require('./Config/database');
db();

app.use(express.json());

// Importing cors and body parser

const cors = require('cors');
// const bodyParser = require('body-parser');

// Importing routes
const cities = require("./Routes/CityRoute")
const services = require("./Routes/ServiceRoute")
const categories = require("./Routes/CategoryRoute")

app.use(cors());
// Create a simple route

app.use('/home', cities)
app.use('/home', services)
app.use('/home', categories)

// Server connexion

let PORT = 4000;

app.listen(PORT, (err) => {
    if (err) {
        console.log("Error when running the server")
    } else {
        console.log(`Server is ruunnig on port ${PORT}`)
    }
})