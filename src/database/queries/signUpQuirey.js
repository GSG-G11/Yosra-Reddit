const connection = require("../config/connections");

const signUpQuirey = (data) =>
  connection.query(
    "INSERT INTO users (username, email, password) VALUES ($1,$2,$3)",
    data
  );
module.exports = signUpQuirey;
