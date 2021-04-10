const express = require('express')
const router = express.Router()
const checkAuth = require('../backend/api/middleware/check-auth')

const signup = require('../backend/controllers/user').signup
const login = require('../backend/controllers/user').login
const getUsers = require('../backend/controllers/user').getUsers


router.post('/signup', signup)
router.post('/login', login)
router.get('/',checkAuth, getUsers)


module.exports = router