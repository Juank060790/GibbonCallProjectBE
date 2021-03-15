const express = require("express");
const router = express.Router();
const { signup, login } = require("../Controllers/users");

/**
 * @route POST /login
 * @description LOGIN
 * @access Public
 */
router.post("/login", login);

/**
 * @route POST /signup
 * @description SIGNUP
 * @access Public
 */
router.post("/signup", signup);

/**
 * @route GET /Get Current User
 * @description Get Current User
 * @access Public
 */

module.exports = router;
