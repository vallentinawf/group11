const express = require('express');
const rentalController = require('../controllers/rentalController');

const router = express.Router();

//Creates a New Rental
router.route('/').post(rentalController.createRental);
router.route("/:id").put(rentalController.update);

//Deletes rental by ID
router.route('/:id').delete(rentalController.deleteRental);
router.get('/', rentalController.findAll);

module.exports = router;
