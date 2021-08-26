const express = require('express');
const router = express.Router();
const user = require('../Controllers/UserController');


router.post('/signup', user.signup)



router.post('/login', (req, res) => {
   
})



module.exports = router;