const mongoose = require('mongoose');
const InvestmentClub = require('../models/investmentClub');


const createInvestmentClub = (req, res, next) => {
    const clubDetails = req.body;
    console.log(clubDetails)
    const investmentClub = new InvestmentClub({
        _id : mongoose.Types.ObjectId(),
        university_name : clubDetails.universityName,
        created_at: new Date(),
        admin_id: [clubDetails.adminId],
        users: [clubDetails.userId],
        fund_returns: clubDetails.fundReturns,
        fund_name: clubDetails.fundName
    });

    investmentClub.save()
        .then(forum => {
            res.status(200).json({
                message : "Investment Club is created"
            })
        })
        .catch(err => {
            res.status(500).json({
                error : err
            })
        })
};

const getInvestmentClub = (req, res, next) => {
    InvestmentClub.find()
        .exec()
        .then(clubs => {
            const count = clubs.length
            res.status(200).json({
                count,
                clubs
            })
        })
        .catch(err => {
            res.status(500).json({
                error : err
            })
        })
}

const getInvestmentClubsByUserId = (req, res, next) => {
    InvestmentClub.find()
        .exec()
        .then(clubs => {
            let resultClubs = [];
            clubs.forEach(club => {
                const user = club.users.find(user => user.equals(req.params.userId))
                if(user){
                   resultClubs.push(club)
                }
            });
            res.status(200).json({
                clubs: resultClubs
            })
        })
        .catch(err => {
            res.status(500).json({
                error : err
            })
        })
}

module.exports = {
    createInvestmentClub,
    getInvestmentClub,
    getInvestmentClubsByUserId
};