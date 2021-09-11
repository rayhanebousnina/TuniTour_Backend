const express = require("express");
const router = express.Router();
const user = require("../Controllers/UserController");

router.post("/signup", user.signup);
router.post("/login", user.login);
// router.post('/profile', user.requireLogin,(req, res) => {
//     res.status(200).json({ user: 'profile'})
// })

module.exports = router;
