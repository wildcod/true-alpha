const mongoose = require('mongoose');
const Post = require('../models/post');


const createPost = (req, res, next) => {
    const postDetails = req.body;

    const post = new Post({
        _id : mongoose.Types.ObjectId(),
        title : postDetails.title,
        text : postDetails.text,
        posted_user : postDetails.userId,
        created_at: new Date(postDetails.createdAt),
    })

    post.save()
        .then(post => {
            res.status(200).json({
                message : "post is created"
            })
        })
        .catch(err => {
            res.status(500).json({
                error : err
            })
        })
};

const getPosts = (req, res, next) => {
    Post.find()
        .exec()
        .then(posts => {
            const count = posts.length
            res.status(200).json({
                count,
                posts
            })
        })
        .catch(err => {
            res.status(500).json({
                error : err
            })
        })
}

const getPostById = (req, res, next) => {
    Post.findById({ _id : req.params.postId})
        .exec()
        .then(result => {
            res.status(200).json({
                data : result
            })
        })
        .catch(err => {
            res.status(500).json({
                error : err
            })
        })
};

module.exports = {
    createPost,
    getPosts,
    getPostById
}