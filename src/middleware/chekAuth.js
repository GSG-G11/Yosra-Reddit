const { verify } = require('jsonwebtoken');
const userError = require('../utils');

const checkAuth = (req, res, next) => {
    console.log(req.cookies)
  const { access_token: token } = req.cookies;

  if (token) {
    verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        userError(401, 'not Auth');
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else res.redirect('/login');
};

module.exports = checkAuth;