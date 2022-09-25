const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');

//TODO

exports.register = catchAsync(async (req, res, next) => {
  const { username, email, password } = req.body;
  const newwUser = await User.create({
    username,
    email,
    password
  });

  res.status(201).json({
    status: 'success',
    data: {
      user: newwUser
    }
  });
});
