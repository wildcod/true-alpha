const mongoose = require('mongoose');
const Comment = require('../models/comment');


const createComment = (req, res, next) => {
    const commentDetails = req.body;

    const comment = new Comment({
        _id : mongoose.Types.ObjectId(),
        text : commentDetails.text,
        posted_user : commentDetails.userId,
        created_at: new Date(commentDetails.createdAt),
        post_id: commentDetails.postId,
    });

    comment.save()
        .then(comment => {
            res.status(200).json({
                message : "comment is created"
            })
        })
        .catch(err => {
            res.status(500).json({
                error : err
            })
        })
};



module.exports = {
    createComment
}