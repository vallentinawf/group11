const User = require('./../models/userModel');
const MakeError = require('./../utils/makeError');

//TODO

exports.register = async (req, res, next) => {
  try {
    const { username, email, password, role } = req.body;
    const newUser = await User.create({
      username,
      email: email.toLowerCase(),
      password,
      role
    });

    //Remove from output data
    newUser.password = undefined;

    res.status(201).json({
      status: 'success',
      data: {
        user: newUser
      }
    });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return next(new MakeError('Email and Password is required', 400));
    }
    //Explicitly select the password
    const user = await User.findOne({ email }).select('+password');

    if (!user || !(await user.comparePassword(password))) {
      return next(new MakeError('Incorrect Credentials'), 401);
    }

    const token = user.createJWT();

    //Cookies jwt
    res.cookie('auth_token', token, {
      expires: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
      ),
      // secure: true,
      httpOnly: true
    });

    res.status(201).json({
      status: 'success'
      // token
    });
  } catch (err) {
    next(err);
  }
};

exports.logout = async (req, res, next) => {
  try {
    res.clearCookie('auth_token');
    res.status(200).json({ status: 'success' });
  } catch (err) {
    next(err);
  }
};
