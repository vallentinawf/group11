const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  rentalId: {
    type: mongoose.Types.ObjectId,
    required: true,
    unique: false
  },
  userId: {
    type: mongoose.Types.ObjectId,
    required: true,
    unique: false
  },
  bookingAt: {
    type: Date,
    required: false
  },
  Returned: {
    type: Boolean,
    required: true,
    default: false
  },
  ReturnedAt: {
    type: Date,
    default: '',
    required: false
  }
});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;
