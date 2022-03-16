const connection = require("../config/connections");

const addPostQuirey = (data) =>
  connection.query(
    "insert into posts (title, content, user_id) VALUES ($1, $2,(select id from users where username=$3))",
    data
  );

module.exports = addPostQuirey;
