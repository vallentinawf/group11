const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const MakeError = require('./utils/makeError');
const errorMiddleware = require('./middleware/errorHandlerMiddleware');
const rentalRouter = require('./routes/rentalRoutes');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json())

// Morgan  middleware => logger request
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/rental', rentalRouter);

app.all('*', (req, res, next) => {
  next(new MakeError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(errorMiddleware);

module.exports = app;
