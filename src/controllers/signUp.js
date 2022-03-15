require("dotenv").config();
const { sign } = require("jsonwebtoken");
const { signupValidation } = require("../utils");
const { hashPassword } = require("../utils");
const { signUpQuirey, getUser } = require("../database/queries");
const { exist } = require("joi");

const signUp = (req, res, next) => {
  const userInput = req.body;
  signupValidation
    .validateAsync(userInput)
    .then((data) => hashPassword(data.password))
    .then((hashpass) =>
      signUpQuirey([userInput.username, userInput.email, hashpass])
    )
    .then(sign({ username: userInput.username }, process.env.SECRET_KEY))
    .then((token) =>
      res.cookie('token', token, { httpOnly: true, secure: true })
    )
    .catch((err) => res.status(404).json({ message: 'The email you\'re using is already taken' }));
};

module.exports = signUp;
