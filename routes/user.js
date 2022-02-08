const express = require("express");
const router = express.Router();

const { getAllUsers } = require("../controllers/user");

/**
 * @route GET api/user
 * @description get all users
 * @access public
 */
router.get("/", getAllUsers);

module.exports = router;
