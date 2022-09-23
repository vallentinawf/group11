const Rental = require('../models/rentalModel');
const catchAsync = require('./../utils/catchAsync');
const MakeError = require('./../utils/makeError');

//Error handling using catchAsync, biar ngak ada try catch
exports.createRental = catchAsync(async (req, res, next) => {
  const newMotor = await Rental.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      tour: newMotor
    }
  });
});

exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i"}} : {};

  Rental.find(condition)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
      err.message || "Some error occured while retrieving rentals."
    });
  });
};