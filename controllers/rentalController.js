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

exports.deleteRental = async (req, res, next) => {
  try{
      console.log(req.params.id)
      // req.params.id = req.params.id.trim()
      // console.log(req.params.id)
      const requestedDelete = await Rental.findByIdAndDelete(req.params.id);
      if(!requestedDelete){
          return next(new ErrorResponse(`Cannot find modules with id of ${req.params.id}`, 404));
      }
      res.status(200).json({success: true, data: {}});
  }catch (e) {
      next(e);
  }
}