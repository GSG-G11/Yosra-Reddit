const connection = require("../config/connections");

const signUpQuirey = ({ username, email, password }) =>
  connection.query(
    "INSERT INTO users (username ,  email, password) VALUES ($1,$2,$3)",
    [username, email, password]
  );
module.exports = signUpQuirey;
