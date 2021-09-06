// Importing Express Js

const express = require("express");
const app = express();
const db = require("./Config/database");
db();

app.use(express.json());

// Importing cors
const cors = require("cors");

// Importing body parser
// const bodyParser = require('body-parser');

// Importing routes
const cities = require("./Routes/CityRoute");
const services = require("./Routes/ServiceRoute");
const categories = require("./Routes/CategoryRoute");
const userRoutes = require("./Routes/UserRoute");

app.use(cors());
// Create a simple routes [CRUD]

app.use("/home", cities);
app.use("/home", services);
app.use("/home", categories);

// Create a simple routes [Authentication]

app.use("/api", userRoutes);

// Server connexion

let PORT = 2000;

app.listen(PORT, (err) => {
  if (err) {
    console.log("Error when running the server");
  } else {
    console.log(`Server is ruunnig on port ${PORT}`);
  }
});
