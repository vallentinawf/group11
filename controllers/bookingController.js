const { default: mongoose } = require('mongoose');
const Booking = require('../models/bookingModel');
const MakeError = require('./../utils/makeError');
const Rental = require('../models/rentalModel');
const User = require('../models/userModel');

exports.createBooking = async (req, res, next) => {
  try {
    const rental = await Rental.findOne({ _id: req.body.rentalId });
    if(rental.quantity < 1){
      return next(new MakeError('Rental not available.', 404));
    }

    const booking = new Booking({
      userId: req.user.id,
      rentalId: req.body.rentalId,
      bookingAt: new Date()
    });
    const result = await booking.save();

    count = rental.count - 1;
    flag = 'available';
    if (!count) {
      flag = 'not-available'  
    }

    await Rental.updateOne(
      {
        _id: mongoose.Types.ObjectId(req.body.rentalId)
      },
      {
        status : flag,
        quantity : count     
      }
    );

      
    const user = await User.findOne({ _id: req.user.id });
    await User.updateOne(
      { _id: req.user.id },
      { borrowedMotorid: [...user.borrowedMotorid, rental._id] }
    );

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

exports.returnBooking = async (req, res, next) => {
  try{

    //Update Booking
    const booking = await Booking.findOneAndUpdate(
      {
        _id: req.body.bookingId
      },
      {
        Returned:true,
        ReturnedAt: new Date()  
      } 
    )

    if(!booking) return next(new MakeError('Cant found Booking.', 404));

    //Update User
    const user = await User.findOne({ _id: req.body.id });

    user.borrowedMotorId.splice(user.borrowedMotorId.indexOf(user.body.rentalId), 1);

    //Update Rental
    const rental = await Rental.findOne({_id : req.body.rentalId});
    await Rental.updateOne(
      { _id: req.params.rentalId}, 
      { quantity: rental}
    )


  }catch (err) {
    next(err);
  }
}