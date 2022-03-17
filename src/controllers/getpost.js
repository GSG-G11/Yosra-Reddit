const {getPostQuery} = require('../database/queries');


const getpost = (req, res, next) => {
   getPostQuery()
   .then((posts) => res.json(posts.rows))
   .catch((err) => next(err));
}

module.exports = getpost;