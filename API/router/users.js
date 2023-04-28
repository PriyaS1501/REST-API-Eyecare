const express = require('express')
const router = express.Router()
const userController = require('../controller/users.model')


// handle GET request for user
router.get('/', userController.getUsers)

// handle GET request for single user
router.get('/:userId', userController.getUserById)




module.exports = router