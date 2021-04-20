const mongoose = require('mongoose');
const InvestmentClub = require('../models/investmentClub');


const createInvestmentClub = (req, res, next) => {
    const clubDetails = req.body;

    const forum = new InvestmentClub({
        _id : mongoose.Types.ObjectId(),
        university_name : clubDetails.universityName,
        created_at: new Date(clubDetails.createdAt),
        admin_id: [clubDetails.userId]
    });
};

module.exports = {
    createInvestmentClub
};