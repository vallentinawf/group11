const express = require('express');
const authController = require('./../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

//Create user
router.post('/register', authController.register);
// Login
router.post('/login', authController.login);
//Update Details
//router.put('/updatedetails', authController.updateDetails);
//Forgot Password
router.post('/forgotpassword', authController.forgotPassword);
//logout
router.post('/logout', authController.logout);

module.exports = router;
