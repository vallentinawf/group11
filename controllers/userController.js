const catchAsync = require('../utils/catchAsync');
const User = require('./../models/userModel');
const MakeError = require('./../utils/makeError');

//TODO

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users
    }
  });
});
