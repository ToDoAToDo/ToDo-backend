const express = require('express')
const router = express.Router()

const { getAllTasks, createTask } = require('../controllers/todo')

/**
 * @route GET api/task
 * @description get all tasks
 * @access public
 */
router.get('/', getAllTasks)

/**
 * @route POST api/task
 * @description add a new task
 * @access public
 */
router.post('/', createTask)

module.exports = router
