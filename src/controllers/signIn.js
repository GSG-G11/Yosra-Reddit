require("dotenv").config();
const { join } = require("path");
const { sign } = require("jsonwebtoken");
const { compare } = require("bcryptjs");
const { getUser, getUsername } = require("../database/queries");
const { signInValidation, userError } = require("../utils");
// console.log()
const signIn = (req, res, next) => {
  const { email, password } = req.body;
  signInValidation
    .validateAsync(req.body)
    .then((result) => getUser(email))
    .then((data) => {
      if (data.rows.length > 0) {
        const hashPassword = data.rows[0].password;
        return compare(password, hashPassword);
      } else {
        throw userError(
          400,
          "Invalid Email, check your email or create a new account"
        );
      }
    })
    .then((valid) => {
      if (!valid) {
        throw userError(400, "uncorrect password");
      } else {
        return getUsername(email);
      }
    })
    .then((data) => data.rows[0].username)
    .then((username) => sign({ username: username }, process.env.SECRET_KEY))
    .then((token) =>
      res
        .cookie("token", token, { httpOnly: true, secure: true })
        .json({ message: "success sign IN" })
    )
    .catch((err) => next(err));
};

module.exports = signIn;
