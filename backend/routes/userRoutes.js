const express = require('express');
const authController = require('./../controllers/authController');
const userController = require('./../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

//Create user
router.post('/register', authController.register);

//DELETE
router.delete('/:id', authMiddleware.auth, userController.deleteUser);

// Current User Profile
router
  .route('/profile')
  .get(
    authMiddleware.auth,
    authMiddleware.restricAccess('admin'),
    userController.profileInfo
  );

// LOGIN + ADMIN ROLE REQUIRED ACCESS
router.use(authMiddleware.auth);
router.use(authMiddleware.restricAccess('admin'));
router.route('/').get(userController.getAllUsers);

// TODO
// 1. User controler -> get by id
// 2. Update current user data
// 3. Update user password???
// router
//   .route('/:id')
//   .put(userController.updateUser)
//
module.exports = router;
