const MakeError = require('./../utils/makeError');

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  console.log(err.stack);

  let error = { ...err };
  error.message = err.message;

  //Mongoose Error Handling => set and return as operational Error
  // ID not found
  if (error.name === 'CastError') {
    const message = `Invalid ID. ${error.path}: ${error.value}.`;
    error = new MakeError(message, 400);
  }
  //Duplicated data
  if (error.code === 11000) {
    const message = 'Duplicated data -> Input different value';
    error = new MakeError(message, 400);
  }
  //Input not valid
  if (error.name === 'ValidationError') {
    const errors = Object.values(err.errors).map(el => el.message);
    const message = `Input not Valid -> check data type. ${errors.join('. ')}`;
    error = new MakeError(message, 400);
  }

  // Run for expected /operational error
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
