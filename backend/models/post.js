const mongoose = require('mongoose')

const postSchema = mongoose.Schema({

    _id : mongoose.Schema.Types.ObjectId,
    forum_id : {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    up_vote_count : {
        type: Number,
        default: 0
    },
    posted_user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
    },
    comments: [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Comment',
    }]
})

module.exports = mongoose.model('Post' ,postSchema)