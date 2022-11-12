const mongoose = require('mongoose');

const rentalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Motor Harus Ada Nama'],
    trim: true
  },
  price: {
    type: Number,
    required: [true, 'Harus punya harga sewa']
  },
  //   description: {
  //     type: String,
  //     trim: true,
  //     required: [true, 'Harus ada diskripsi singkat']
  //   },
  //   imageCover: {
  //     type: String,
  //     required: [true, 'Harus ada Foto']
  //   },
  status: {
    type: String,
    enum: ['available', 'not-available'],
    default: 'available'
  },
  type: {
    type: String,
    enum: ['matic', 'manual'],
    required: [true, 'Harus ada tipe motor']
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  borrowerId: {
    type: [mongoose.Types.ObjectId],
    required: false
  },
  quantity: {
    type: Number,
    default: 1
  }
});

const Rental = mongoose.model('Rental', rentalSchema);

module.exports = Rental;
