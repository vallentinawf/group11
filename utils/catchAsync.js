module.exports = fn => {
  return (req, res, next) => {
    fn(req, res, next).catch(e => next(e));
  };
};
