const mongoose = require('mongoose')

const investmentClubSchema = mongoose.Schema({

    _id : mongoose.Schema.Types.ObjectId,
    university_name : {
        type : String,
        required : true
    },
    club_name : {
        type : String,
        required : true
    },
    club_returns : {
      type: Number,
      required: true
    },
    created_at : {
        type : Date,
        default : ''
    },
    forum_id : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Forum',
    }],
    admin_id : [{
        type: mongoose.Schema.Types.ObjectId
    }]
})

module.exports = mongoose.model('InvestmentClubSchema' ,investmentClubSchema)