const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const MakeError = require('./utils/makeError');
const errorMiddleware = require('./middleware/errorHandlerMiddleware');
const rentalRouter = require('./routes/rentalRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

app.use(bodyParser.json());

// Morgan  middleware => logger request
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/rental', rentalRouter);
app.use('/api/v1/users', userRouter);

app.all('*', (req, res, next) => {
  next(new MakeError(`Cant find URL : ${req.originalUrl}`, 404));
});

app.use(errorMiddleware);

module.exports = app;
