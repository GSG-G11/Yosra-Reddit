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
      if (!data.rows.length) {
        userError(
          400,
          "Invalid Email, check your email or create a new account"
        );
      } else {
        const hashPassword = data.rows[0].password;
        const id = data.rows[0].id;
        return compare(password, hashPassword);
      }
    })
    .then((valid) => getUsername(email))
    .then((data) => data.rows[0].username)
    .then((username) => sign({ username: username }, process.env.SECRET_KEY))
    .then((token) =>
      res
        .cookie("token", token, { httpOnly: true, secure: true })
        .sendFile(join(__dirname, "..", "..", "public", "index.html"))
    )
    .catch((err) => next(err));
};

module.exports = signIn;
