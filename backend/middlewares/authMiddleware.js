//const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const MakeError = require('../utils/makeError');
const User = require('../models/userModel');

//auth access -> for login middleware
exports.auth = async (req, res, next) => {
  // let token;
  let payload;
  let currentUser;

  //Token Cookies
  const token = req.cookies.auth_token;
  if (!token) {
    return next(
      new MakeError('Authentication Invalid -> wrong email or password', 401)
    );
  }

  try {
    // const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    //Verify the user token
    payload = jwt.verify(token, process.env.JWT_SECRET);

    // Cek kalo user udh didelete => token releveant or not
    currentUser = await User.findById(payload.id);
    if (!currentUser) {
      return next(new MakeError('User does not exist for this token'), 401);
    }

    // Proceed to next middleware/route
    req.user = currentUser;
    next();
    //TODO (optional) : Check if password is changed after token is generated
  } catch (err) {
    return next(err);
  }
};

//Authorization middleware
exports.restricAccess = (...roles) => {
  return (req, res, next) => {
    //Check if user.role is in roles that is specified
    if (!roles.includes(req.user.role)) {
      return next(new MakeError('Unauthorized access!', 403));
    }

    next();
  };
};
