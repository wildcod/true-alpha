const express = require('express');
const router = express.Router();

const createPost = require('../controllers/posts').createPost;
const getPostById = require('../controllers/posts').getPostById;
const getPosts = require('../controllers/posts').getPosts;


router.post('/create', createPost);
router.get('/:postId', getPostById);
router.get('/', getPosts);


module.exports = router;