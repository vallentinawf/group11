const MakeError = require('../utils/makeError');

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  console.log(err.stack);

  let error = { ...err };
  error.message = err.message;

  //Mongoose Error Handling => set and return as operational Error
  // ID not found from mongoose
  if (error.name === 'CastError') {
    const message = `Invalid ID. ${error.path}: ${error.value}.`;
    error = new MakeError(message, 400);
  }
  //Duplicated data from mongoose
  if (error.code === 11000) {
    const message = 'Duplicated data -> Input different value';
    error = new MakeError(message, 400);
  }
  //Input not valid from mongoose
  if (error.name === 'ValidationError') {
    const errors = Object.values(err.errors).map(el => el.message);
    const message = `Input not Valid -> check data type. ${errors.join('. ')}`;
    error = new MakeError(message, 400);
  }
  // Invalid token verification form JWT
  if (error.name === 'JsonWebTokenError') {
    const message = 'Token is not valid. Try login again';
    error = new MakeError(message, 401);
  }
  // JWT token Expired error
  if (error.name === 'TokenExpiredError') {
    const message = 'Token is expired. Try login again';
    error = new MakeError(message, 401);
  }

  // Run for expected -> operational error
  if (error.operationalError) {
    res.status(error.statusCode).json({
      status: error.status,
      message: error.message
    });

    // Unknown Error
  } else {
    res.status(500).json({
      status: error.status || 'Error',
      message: error.message || 'Unknown error!'
    });
  }
};
