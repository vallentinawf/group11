const Rental = require('./../models/rentalModel');

exports.createRental = async (req, res) => {
  try {
    // const newMotor = new Rental({})
    // newMotor.save()

    const newMotor = await Rental.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        tour: newMotor
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message
    });
  }
};
