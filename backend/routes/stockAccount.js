const express = require('express')
const router = express.Router()

const login = require('../controllers/investmentClub').login;

router.post('/login', login)


module.exports = router