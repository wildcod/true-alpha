const mongoose = require('mongoose')

const investmentClubSchema = mongoose.Schema({

    _id : mongoose.Schema.Types.ObjectId,
    university_name : {
        type : String,
        required : true
    },
    fund_name : {
        type : String,
        required : true
    },
    fund_returns : {
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
    users : [{
        type: mongoose.Schema.Types.ObjectId
    }],
    admin_id : [{
        type: mongoose.Schema.Types.ObjectId
    }]
})

module.exports = mongoose.model('InvestmentClub' ,investmentClubSchema)