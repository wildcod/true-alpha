const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({

    _id : mongoose.Schema.Types.ObjectId,
    post_id : {
        type: mongoose.Schema.Types.ObjectId,
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
    }
})

module.exports = mongoose.model('Comment' ,commentSchema)