const crypto = require('crypto');
const User = require('./../models/userModel');
const MakeError = require('./../utils/makeError');
const sendEmail = require('./../utils/sendEmail.js')

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

    sendTokenResponse(user, 200, res);

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

exports.resetPassword = async(req, res, next) => {

  const resetPasswordToken = crypto
    .createHash('sha256')
    .update(req.params.resettoken)
    .digest('hex');

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordTokenExpire: { $gt: Date.now()}
  });

  if(!user){
    return next(new MakeError('Invalid Token', 400));
  }

  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordTokenExpire = undefined;
  await user.save();

  sendTokenResponse(user, 200, res);
};

const sendTokenResponse = async(user, statusCode, res) => {

  try{
  const token = user.getSignedJwtToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true
  };

  if(process.env.NODE_ENV === 'production'){
    options.secure = true;
  }

  res
    .status(statusCode)
    .cookie('token', token, options)
    .json({
      success: true,
      token
    });
  } catch (err){
    next(err);
  }
};

//User yang sedang Login
exports.forgotPassword = async(req, res, next) => {

  try{
  const user = await User.findOne({email: req.body.email});

  if(!user){
    return next(new MakeError('There is no user with this email', 404))
  }

  //Get reset Token
  const resetToken = user.getResetPasswordToken();

  await user.save({ validateBeforeSave: false});

  //Create reset url
  const resetUrl = `${req.protocol}://${req.get('host')}/api/v1/resetpassword/${resetToken}`;

  const message = `Anda menerima email ini karena anda telah meminta untuk reset password, silakan
  buat PUT request ke : \n\n${resetUrl}`;
  
  //2 RES STATUS HERE, NEED FIX
  //RESOLVED
  try {
    await sendEmail({
      email: user.email,
      subject: 'Password Reset Token',
      message
    });
    res.status(200).json({success: true, data: 'email sent'});
  } catch (error) {
    console.log(error)
    user.resetPasswordToken = undefined;
    user.resetPasswordTokenExpire = undefined;

    await user.save({ validateBeforeSave: false});

    //return next(new MakeError('Email could not be sent', 500));
    return next(error);
  }
} catch (err){
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
