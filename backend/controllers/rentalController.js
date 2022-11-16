const Rental = require('../models/rentalModel');
const MakeError = require('./../utils/makeError');

exports.createRental = async (req, res, next) => {
  try {
    const newMotor = await Rental.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        rental: newMotor
      }
    });
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    if (!req.body) {
      return next(new MakeError('Data to update can not be empty.', 404));
    }
    const rental = await Rental.findByIdAndUpdate(req.params.id, req.body, {
      useFindAndModify: false,
      new: true,
      runValidators: true
    });

    if (!rental) {
      return next(
        new MakeError(`Cannot update Rental with id=${req.params.id}.`, 404)
      );
    }

    res.status(200).json({
      status: 'success',
      message: 'Rental was updated successfully.',
      data: {
        rental
      }
    });
  } catch (err) {
    next(err);
  }
};

exports.deleteRental = async (req, res, next) => {
  try {
    const requestedDelete = await Rental.findByIdAndDelete(req.params.id);
    if (!requestedDelete) {
      return next(new MakeError(`There is no rental id ${req.params.id}`, 404));
    }
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    next(err);
  }
};

// exports.findAll = async (req, res, next) => {
//   try {
//     console.log(req.query);
//     const queryParam = { ...req.query };
//     console.log(queryParam);

//     const features = ['page', 'sort', 'limit'];

//     //ignoring feature
//     features.forEach(feature => delete queryParam[feature]);

//     //return query object => chain the features
//     //Filtering
//     console.log(queryParam);
//     let queryObj = Rental.find(queryParam);

//     //Sorting
//     if (req.query.sort) {
//       queryObj = queryObj.sort(req.query.sort);
//     }
//     // Default Sorting by newest created rental
//     else {
//       queryObj = queryObj.sort('-createdAt');
//     }

//     //Pagination -> page and result limit
//     const page = parseInt(req.query.page, 10) || 1;
//     const limit = parseInt(req.query.limit, 10) || 10;
//     const skip = limit * (page - 1);

//     queryObj = queryObj.skip(skip).limit(limit);

//     //get the result of query obj
//     const rental = await queryObj;

//     res.status(200).json({
//       status: 'success',
//       results: rental.length,
//       data: {
//         rental
//       }
//     });
//   } catch (err) {
//     next(err);
//   }
// };

exports.findAll = async (req, res, next) => {
  try {
    const rental = await Rental.find({});
    res.status(200).json({
      status: 'success',
      data: {
        rental
      }
    });
  } catch (err) {
    next(err);
  }
};

exports.findById = async (req, res, next) => {
  try {
    const rental = await Rental.findById(req.params.id);

    if (!rental) {
      return next(
        new MakeError(`Cannot find Rental with id= ${req.params.id}`, 404)
      );
    }
    res.status(200).json({
      status: 'success',
      data: {
        rental
      }
    });
  } catch (err) {
    next(err);
  }
};
