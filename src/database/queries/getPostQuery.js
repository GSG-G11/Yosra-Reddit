const connection = require("../config/connections");

const getPostQuery = () => {
 return connection.query(
    'SELECT title, content, post_image, username FROM posts left join users ON posts.user_id = users.id'
  );
};
module.exports = getPostQuery;