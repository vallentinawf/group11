class MakeError extends Error {
  constructor(message, statusCode) {
    super(message);

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.operationalError = true;

    // error logger & exclude this class to error stack when called
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = MakeError;
