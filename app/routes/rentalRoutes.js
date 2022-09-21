const express = require('express');
const rentalController = require('./../controllers/rentalController');

const router = express.Router();

router.route('/').post(rentalController.createRental);

module.exports = router;
