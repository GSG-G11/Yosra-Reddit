require("dotenv").config();
const { sign } = require("jsonwebtoken");
const { join } = require("path");
const { signupValidation, hashPassword, userError } = require("../utils");
const { signUpQuirey, getUser } = require("../database/queries");

const signUp = (req, res, next) => {
  const { username, email, password } = req.body;
  signupValidation
    .validateAsync(req.body)
    .then(() => getUser(email))
    .then((data) => {
      if (data.rows.length > 0) {
        throw userError(409, "Email already have account");
      } else {
        return password;
      }
    })
    .then((data) => hashPassword(data))
    .then((hashpass) => signUpQuirey([username, email, hashpass]))
    .then(sign({ email: email }, process.env.SECRET_KEY))
    .then((token) =>
      res
        .cookie("token", token, { httpOnly: true, secure: true })
        .json({ message: "success sign up" })
    )
    .catch((err) => {
      if (err) {
        next(userError(400, err.message));
      } else {
        next(err);
      }
    })
    .catch((err) => next(err));
};

module.exports = signUp;
