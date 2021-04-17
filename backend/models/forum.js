const mongoose = require('mongoose')

const forumSchema = mongoose.Schema({

    _id : mongoose.Schema.Types.ObjectId,
    name : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    isPrivate: {
      type: Boolean,
      default: true
    },
    created_at : {
        type : Date,
        default : ''
    },
    posts : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Post',
    }],
    users : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
    }],
    admin_id : [{
        type: mongoose.Schema.Types.ObjectId
    }]
})

module.exports = mongoose.model('Forum' ,forumSchema)