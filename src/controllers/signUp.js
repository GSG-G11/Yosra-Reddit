require("dotenv").config();
const { sign } = require("jsonwebtoken");
const { join } = require('path');
const { signupValidation, hashPassword, userError} = require("../utils");
const { signUpQuirey, getUser } = require("../database/queries");

const signUp = (req, res, next) => {
  const {username, email , password} = req.body;
  signupValidation
    .validateAsync(req.body)
    .then((data) => hashPassword(data.password))
    .then((hashpass) =>
      signUpQuirey([username,email, hashpass])
    )
    .then(sign({ email: email }, process.env.SECRET_KEY))
    .then((token) =>
      res.cookie('token', token, { httpOnly: true, secure: true })
      .sendFile(join(__dirname, '..', '..', 'public', 'index.html'))
    )
    .catch((err) => next(err));
};

module.exports = signUp;
