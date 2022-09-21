const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const rentalRouter = require('./app/routes/rentalRoutes');

const app = express();

// 1) Morgan  middleware => logger request muncul di terminal pas ada req ke server
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/rental', rentalRouter);

module.exports = app;
