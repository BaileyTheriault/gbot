const db = require('../index');

const search = (req) => {
  const regExp = new RegExp(req, 'i');

  return db.arrayModel.find({ name: regExp })
    .then((doc) => doc[0])
    .catch((err) => err);
};

module.exports = {
  search,
};
