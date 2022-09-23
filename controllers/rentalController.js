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

exports.update =(req,res) => {
  if(!req.body){
    return res.status(400).send({
      message: "Data to update can not be empty."
    })
  }
  const id = req.params.id;
  Rental.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
  .then(data => {
    if (!data){
      res.status(404).send({
        message: 'Cannot update Rental with id=${id}.'
      });
    } else res.send({message: "Rental was updated successfully."});
  })
  .catch(err => {
    res.status(500).send({
      message:"Error updating Rental with id=" +id
    });
  });
};
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
