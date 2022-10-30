const { default: mongoose } = require('mongoose');
const Booking = require('../models/bookingModel');
const MakeError = require('./../utils/makeError');
const Rental = require('../models/rentalModel');
const User = require('../models/userModel');

exports.createBooking = async (req, res, next) => {
  try {
    const rental = await Rental.findOne({ _id: req.body.rentalId });
    if (rental.quantity < 1) {
      return next(new MakeError('Rental not available.', 404));
    }

    const booking = new Booking({
      userId: req.user.id,
      rentalId: req.body.rentalId,
      bookingAt: Date.now()
    });

    const result = await booking.save();
    const count = rental.quantity - 1;
    let flag = 'available';
    if (!count) {
      flag = 'not-available';
    }

    const user = await User.findOne({ _id: req.user.id });
    await User.updateOne(
      { _id: mongoose.Types.ObjectId(req.user.id) },
      { borrowedMotorId: [...user.borrowedMotorId, rental._id] }
    );

    await Rental.updateOne(
      {
        _id: mongoose.Types.ObjectId(req.body.rentalId)
      },
      {
        status: flag,
        quantity: count,
        borrowerId: [...rental.borrowerId, user._id]
      }
    );

    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

exports.getBookingAll = async (req, res, next) => {
  try {
    const booking = await Booking.find().sort('-bookingAt');

    res.status(200).json({
      status: 'success',
      results: booking.length,
      data: {
        booking
      }
    });
  } catch (err) {
    next(err);
  }
};

// as admin
exports.getBooking = async (req, res, next) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return next(
        new MakeError(`Cannot find booking with id= ${req.params.id}`, 404)
      );
    }

    const rental = await Rental.findOne({ _id: booking.rentalId });
    const user = await User.findOne({ _id: booking.userId });

    res.status(200).json({
      status: 'success',
      data: {
        rental,
        user
      }
    });
  } catch (err) {
    next(err);
  }
};

// As user --> as one with user profile --> userController
// exports.getBookingUser = async (req, res, next) => {
//   try {
//     const user = await User.findOne({ _id: req.user.id });

//     const rental = await Rental.find({ _id: user.rentalId });

//     const booking = await Booking.findById(req.params.id);

//     if (!booking) {
//       return next(
//         new MakeError(`Cannot find booking with id= ${req.params.id}`, 404)
//       );
//     }

//     res.status(200).json({
//       status: 'success',
//       data: {
//         rental,
//         user
//       }
//     });
//   } catch (err) {
//     next(err);
//   }
// };

//TODO -> Cara nempelin informasi bookingId di body
exports.returnBooking = async (req, res, next) => {
  try {
    //Update Booking
    const booking = await Booking.findOneAndUpdate(
      {
        _id: req.body.bookingId
      },
      {
        Returned: true,
        ReturnedAt: Date.now()
      }
    );

    if (!booking) return next(new MakeError('Cant found Booking.', 404));

    //Update User
    const user = await User.findOne({ _id: req.body.userId });

    user.borrowedMotorId.splice(
      user.borrowedMotorId.indexOf(user.body.rentalId),
      1
    );

    await User.updateOne(
      { _id: req.body.userId },
      { borrowedMotorId: user.borrowedMotorId }
    );

    //Update Rental
    const rental = await Rental.findOne({ _id: req.body.rentalId });

    rental.borrowerId.splice(rental.borrowerId.indexOf(req.body.userId), 1);

    await Rental.updateOne(
      { _id: req.params.rentalId },
      { quantity: rental.quantity + 1, borrowerId: rental.borrowerId }
    );

    res.status(201).json('oke');
  } catch (err) {
    next(err);
  }
};
