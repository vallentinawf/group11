const { default: mongoose } = require('mongoose');
const Booking = require('../models/bookingModel');
const MakeError = require('./../utils/makeError');
const Rental = require('../models/rentalModel');
const User = require('../models/userModel');

exports.createBooking = async (req, res, next) => {
  try {
    const booking = new Booking({
      userId: req.user.id,
      rentalId: req.body.rentalId
    });
    const result = await booking.save();

    const rental = await Rental.findOne({ _id: req.body.rentalId });
    await Rental.updateOne(
      {
        _id: mongoose.Types.ObjectId(req.body.rentalId)
      },
      {
        status: 'not-available'
      }
    );

    const user = await User.findOne({ _id: req.user.id });
    // await User.updateOne(
    //   { _id: req.user.id },
    //   { borrowedMotorid: [...user.borrowedMotorid, rental._id] }
    // );

    console.log(req.currentUser);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

exports.getBooking = async (req, res, next) => {
  try {
    // const rental = await Rental.findOne({ _id: req.params.id });
    // console.log(req.user.id);
    // const user = await User.findOne({ _id: req.currentUser.id });
    console.log(req.currentUser.id);
  } catch (err) {
    next(err);
  }
};
