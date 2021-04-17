const express = require('express');
const router = express.Router();

const createForum = require('../controllers/forums').createForum;
const getForumById = require('../controllers/forums').getForumById;
const getForums = require('../controllers/forums').getForums;
const addUserInForum = require('../controllers/forums').addUserInForum;
const removeUser = require('../controllers/forums').removeUser;


router.post('/create', createForum);
router.get('/:forumId', getForumById);
router.post('/add-user', addUserInForum);
router.post('/remove-user', removeUser);
router.get('/', getForums);


module.exports = router;