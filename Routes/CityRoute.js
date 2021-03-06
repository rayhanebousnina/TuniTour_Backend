const express = require("express");
const router = express.Router();
const city = require("../Controllers/CityController");

/* @GET URL */
router.get("/allcities", city.getCity);
router.get("/allcities_by_id/:id", city.getCurrentCity);

/* @POST URL */
router.post("/addCity", city.addCity);

/* @DELETE URL */
router.delete("/deleteCity/:id", city.deleteCity);

/* @PUT URL */
router.put("/updateCity/:id", city.updateCity);

module.exports = router;
