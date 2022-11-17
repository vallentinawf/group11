const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const MakeError = require('./utils/makeError');
const errorMiddleware = require('./middlewares/errorHandlerMiddleware');
const rentalRouter = require('./routes/rentalRoutes');
const userRouter = require('./routes/userRoutes');
const authRouter = require('./routes/authRoute');
const bookingRouter = require('./routes/bookingRoutes');

const app = express();
const corsOptions = {
  credentials: true,
  origin: 'http://localhost:3000'
};

// Morgan  middleware => logger request
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(cors(corsOptions));
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
//cookies Parser
app.use(cookieParser());

//parser -body -> req.body
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/rental', rentalRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/booking', bookingRouter);

//Error for all undifined routes
app.all('*', (req, res, next) => {
  next(new MakeError(`Cant find URL : ${req.originalUrl}`, 404));
});

app.use(errorMiddleware);

module.exports = app;
