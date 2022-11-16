const express = require('express');
const bookingController = require('../controllers/bookingController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// router.get('/', authMiddleware.auth, bookingController.getBookingAll);
router.get('/', bookingController.getBookingAll);
router.get('/:id');

router
  .route('/book')
  .post(
    authMiddleware.auth,
    authMiddleware.restricAccess('admin'),
    bookingController.createBooking
  );

router
  .route('/return')
  .patch(authMiddleware.auth, bookingController.returnBooking);

module.exports = router;
