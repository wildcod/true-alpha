const express = require('express');
const router = express.Router();

const createInvestmentClub = require('../controllers/investmentClub').createInvestmentClub;
const getInvestmentClub = require('../controllers/investmentClub').getInvestmentClub;
const getInvestmentClubsByUserId = require('../controllers/investmentClub').getInvestmentClubsByUserId;


router.post('/create', createInvestmentClub);
router.get('/', getInvestmentClub);
router.get('/:userId', getInvestmentClubsByUserId);


module.exports = router;