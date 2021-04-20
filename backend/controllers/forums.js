const mongoose = require('mongoose');
const Forum = require('../models/forum');
const InvestmentClub = require('../models/investmentClub');


const createForum = (req, res, next) => {
    const forumDetails = req.body;
    const forum = new Forum({
        _id : mongoose.Types.ObjectId(),
        name : forumDetails.forumName,
        description : forumDetails.description,
        isPrivate : forumDetails.isPrivate,
        created_at: new Date(),
        admin_id: [forumDetails.adminId],
        investment_club_id: forumDetails.investmentClubId
    });

    forum.save()
        .then(forum => {
            InvestmentClub.findOneAndUpdate(
                {_id : forumDetails.investmentClubId},
                {
                    $push : { 'forum_id' : forum._id },
                }).exec()
                .then(response => {
                    res.status(200).json({
                        message : "Forum is created"
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
        .populate('posts')
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
        .populate('posts')
        .exec()
        .then(result => {
            res.status(200).json({
                forum: result
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
            $pull : { 'users' : req.body.userId },
        },
        {new : true}
    ).exec()
        .then(result => {
            res.status(200).json({
                message : "User Remove",
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