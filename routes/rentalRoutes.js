const express = require('express');
const rentalController = require('../controllers/rentalController');

const router = express.Router();

//Creates a New Rental
router.route('/').post(rentalController.createRental);

//Deletes rental by ID
router.route('/:id').delete(rentalController.deleteRental);

module.exports = router;
