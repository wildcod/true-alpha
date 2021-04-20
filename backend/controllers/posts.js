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

const removePostById = (req, res, next) => {
    Post.remove({ _id : req.params.postId},
    )
        .exec()
        .then(result => {
            res.status(200).json({
                message : "post deleted",
                result
            })
        })
        .catch(err => {
            res.status(500).json({
                error : err
            })
        })
};

const upVotePost = (req, res, next) => {
    Post.findById({ _id : req.body.postId})
        .exec()
        .then(result => {
            Post.findOneAndUpdate(
                { _id : req.body.postId },
                { $set : { up_vote_count: result?.up_vote_count + 1 } },
                { new : true}
            ).exec()
                .then(result => {
                    res.status(200).json({
                        message : "Post Upvoted",
                        request : {
                            result
                        }
                    })
                })
                .catch(err => {
                    res.status(500).json({
                        error : err
                    })
                })
        })
        .catch(err => {
            res.status(500).json({
                error : err
            })
        })
}

module.exports = {
    createPost,
    getPosts,
    getPostById,
    removePostById,
    upVotePost
}