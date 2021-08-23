const express = require('express');
const router = express.Router();
const category = require('../Controllers/CategoryController');


/* @GET URL */
router.get('/allcategories', category.getCategory);

/* @POST URL */
router.post("/addCategory", category.addCategory);

/* @DELETE URL */
router.delete("/deleteCategory/:id", category.deleteCategory);

/* @PUT URL */
router.put("/updateCategory/:id", category.updateCategory);

module.exports = router;