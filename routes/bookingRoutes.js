const express = require('express');
const bookingController = require('../controllers/bookingController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

//router.use(authMiddleware.auth);
//router.get('/', authMiddleware.auth, bookingController.getBooking);

router.route('/').post(authMiddleware.auth, bookingController.createBooking);

module.exports = router;
