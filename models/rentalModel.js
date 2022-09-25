const mongoose = require('mongoose');

const rentalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Motor Harus Ada Nama'],
    trim: true
  },
  //   ratingNumber: {
  //     type: Number,
  //     default: 0,
  //     min: [1, 'Rating harus diatas 1.0'],
  //     max: [5, 'Rating harus dibawah 5.0']
  //   },
  price: {
    type: Number,
    required: [true, 'Harus punya harga sewa']
  },
  //   priceDiscount: {
  //     type: Number,
  //     validate: {
  //       validator: function(val) {
  //         // this only points to current doc on NEW document creation
  //         return val < this.price;
  //       },
  //       message: 'Harga diskon ({VALUE}) harus dibawah harga sewa'
  //     }
  //   },
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
  }
});

const Rental = mongoose.model('Rental', rentalSchema);

module.exports = Rental;
