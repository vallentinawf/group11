const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const MakeError = require('./utils/makeError');
const errorMiddleware = require('./middlewares/errorHandlerMiddleware');
const rentalRouter = require('./routes/rentalRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// Morgan  middleware => logger request
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(cors());

//parser -body -> req.body
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/rental', rentalRouter);
app.use('/api/v1/users', userRouter);

//Error for all undifined routes
app.all('*', (req, res, next) => {
  next(new MakeError(`Cant find URL : ${req.originalUrl}`, 404));
});

app.use(errorMiddleware);

module.exports = app;
