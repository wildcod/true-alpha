const mongoose = require('mongoose');
const Forum = require('../models/forum');


const createForum = (req, res, next) => {
    const forumDetails = req.body;

    const forum = new Forum({
        _id : mongoose.Types.ObjectId(),
        name : forumDetails.forumName,
        description : forumDetails.description,
        isPrivate : forumDetails.isPrivate,
        created_at: new Date(forumDetails.createdAt),
        admin_id: [forumDetails.userId]
    })

    forum.save()
        .then(forum => {
            res.status(200).json({
                message : "Forums is created"
            })
        })
        .catch(err => {
            res.status(500).json({
                error : err
            })
        })
};

const addUserInForum = (req, res, next) => {
    Forum.findOneAndUpdate(
        {_id : req.body.forumId},
        {
            $push : { 'users' : req.body.userId },
        },
        {new : true}
    ).exec()
        .then(result => {
            res.status(200).json({
                message : "User Added",
                result
            })
        })
        .catch(err => {
            res.status(500).json({
                error : err
            })
        })
};

const getForums = (req, res, next) => {
    Forum.find()
        .exec()
        .then(forums => {
            const count = forums.length
            res.status(200).json({
                count,
                forums
            })
        })
        .catch(err => {
            res.status(500).json({
                error : err
            })
        })
}

const getForumById = (req, res, next) => {
    Forum.findById({ _id : req.params.forumId})
        .populate('posts users')
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
}

const removeUser = (req, res, next) => {
    Forum.findOneAndUpdate(
        {_id : req.body.forumId},
        {
            $push : { 'users' : req.body.userId },
        },
        {new : true}
    ).exec()
        .then(result => {
            res.status(200).json({
                message : "User Added",
                result
            })
        })
        .catch(err => {
            res.status(500).json({
                error : err
            })
        })
};

module.exports = {
    createForum,
    getForums,
    getForumById,
    addUserInForum,
    removeUser
}