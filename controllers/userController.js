const User = require('./../models/userModel');
const MakeError = require('./../utils/makeError');

//TODO

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    res.status(200).json({
      status: 'success',
      results: users.length,
      data: {
        users
      }
    });
  } catch (err) {
    next(err);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const reqdelete = await User.findByIdAndDelete(req.params.id);
    if (!reqdelete) {
      return next(new MakeError(`Cannot delete an user with id=${req.params.id}`, 404));
    }
    res.status(200).json({ success: 'An account has been deleted', data: {} });
  } catch (err) {
    next(err);
  }
};
