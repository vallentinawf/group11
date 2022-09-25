const express = require('express');
const authController = require('./../controllers/authController');
const userController = require('./../controllers/userController');

const router = express.Router();

router.post('/register', authController.register);

// TODO
router.route('/').get(userController.getAllUsers);
//   .post(userController.createUser);

// router
//   .route('/:id')
//   .get(userController.getUserID)
//   .put(userController.updateUser)
//   .delete(userController.deleteUser);

module.exports = router;
