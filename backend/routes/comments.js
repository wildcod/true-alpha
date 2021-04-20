const express = require('express');
const router = express.Router();

const createComment = require('../controllers/comments').createComment;


router.post('/create', createComment);


module.exports = router;