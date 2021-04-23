const express = require('express');
const router = express.Router();

const createPost = require('../controllers/posts').createPost;
const getPostById = require('../controllers/posts').getPostById;
const getPosts = require('../controllers/posts').getPosts;
const removePostById = require('../controllers/posts').removePostById;
const upVotePost = require('../controllers/posts').upVotePost;


router.post('/create', createPost);
router.get('/:postId', getPostById);
router.get('/remove/:postId', removePostById);
router.post('/up-vote-post', upVotePost);
router.get('/', getPosts);


module.exports = router;