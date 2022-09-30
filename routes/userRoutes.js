const express = require('express');
const authController = require('./../controllers/authController');
const userController = require('./../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

//Create user
router.post('/register', authController.register);
// Login
router.post('/login', authController.login);

//DELETE
router.delete('/:id',authMiddleware.auth, userController.deleteUser);

// LOGIN + ADMIN ROLE REQUIRED ACCESS
router.use(authMiddleware.auth);
router.use(authMiddleware.restricAccess('admin'));
router.route('/').get(userController.getAllUsers);

// TODO
// 1. User controler -> get by id
// 2. Update current user data
// 3. Delete current user
// 4. Update user password???
// router
//   .route('/:id')
//   .get(userController.getUserID)
//   .put(userController.updateUser)
//   .delete(userController.deleteUser);

module.exports = router;
