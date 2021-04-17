const express = require('express');
const router = express.Router();

const createPost = require('../controllers/posts').createPost;
const getPostById = require('../controllers/posts').getPostById;
const getPosts = require('../controllers/posts').getPosts;
const removePostById = require('../controllers/posts').removePostById;


router.post('/create', createPost);
router.get('/:postId', getPostById);
router.get('/remove/:postId', removePostById);
router.get('/', getPosts);


module.exports = router;