const express = require('express');
const router = express.Router();
const service = require('../Controllers/ServiceController');


/* @GET URL */
router.get('/allservices', service.getService);

/* @POST URL */
router.post("/addService", service.addService);

/* @DELETE URL */
router.delete("/deleteService/:id", service.deleteService);

/* @PUT URL */
router.put("/updateService/:id", service.updateService);


module.exports = router;