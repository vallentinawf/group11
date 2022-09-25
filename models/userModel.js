const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Must input name'],
    minlength: 3,
    maxlength: 30,
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Must input email'],
    validate: {
      validator: validator.isEmail,
      message: 'Email is not valid'
    },
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Must input password'],
    minlength: 6,
    select: false
  }
});

//Run when password saved/modified
UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
