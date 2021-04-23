const express = require('express')
const router = express.Router()
const checkAuth = require('../api//checkAuth')

const signup = require('../controllers/users').signup
const login = require('../controllers/users').login
const getUsers = require('../controllers/users').getUsers


router.post('/signup', signup)
router.post('/login', login)
router.get('/', getUsers)


module.exports = router