require("dotenv").config();
const { join } = require("path");
const jwt = require("jsonwebtoken");
const {addPostQuery} = require('../database/queries');

const addPost = (req, res, next) => {
        const { title, content, username } = req.body;
        addPostQuery([title, content, username])
          .then(() => res.json({ message: 'success', status: 201 }))
          .catch((err) => next(err));
      };


module.exports = addPost;