const mongoose = require('mongoose');
const Comment = require('../models/comment');


const createComment = (req, res, next) => {
    const commentDetails = req.body;

    const comment = new Comment({
        _id : mongoose.Types.ObjectId(),
        title: commentDetails.title,
        text : commentDetails.text,
        posted_user_id : commentDetails.userId,
        created_at: new Date(),
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