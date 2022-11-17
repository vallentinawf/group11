const express = require('express');
const rentalController = require('../controllers/rentalController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

//Mounting route
// Get all rental, Creates a New Rental
router
  .route('/')
  .get(rentalController.findAll)
  .post(
    authMiddleware.auth, //Untuk login -> user ataupun admin
    authMiddleware.restricAccess('admin'), // Akses hanya untuk admin
    rentalController.createRental
  );

//Get spesific rental by Id
router.route('/:id').get(rentalController.findById);

// Deletes rental by ID, and Update spesific rental
// LOGIN + ADMIN ROLE REQUIRED ACCESS

router.use(authMiddleware.auth);
router.use(authMiddleware.restricAccess('admin'));
router
  .route('/:id')
  .delete(rentalController.deleteRental)
  .patch(rentalController.update);

module.exports = router;
