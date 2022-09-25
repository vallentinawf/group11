const express = require('express');
const rentalController = require('../controllers/rentalController');

const router = express.Router();

//Mounting route
// Get all rental, Creates a New Rental
router
  .route('/')
  .get(rentalController.findAll)
  .post(rentalController.createRental);

// Get spesific rental by Id, Deletes rental by ID, and Update spesific rental
router
  .route('/:id')
  .get(rentalController.findById)
  .delete(rentalController.deleteRental)
  .put(rentalController.update);

module.exports = router;
