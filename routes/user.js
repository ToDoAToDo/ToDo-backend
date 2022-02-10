const express = require('express')
const router = express.Router()

router.use()

const { getAllUsers, createUser } = require('../controllers/user')

/**
 * @route GET api/user
 * @description get all users
 * @access public
 */
router.get('/', getAllUsers)

/**
 * @route POST api/user
 * @description add a new user
 * @access public
 */
router.post('/', createUser)

module.exports = router
