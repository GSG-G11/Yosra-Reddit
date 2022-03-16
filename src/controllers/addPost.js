require("dotenv").config();
const { join } = require("path");
const jwt = require("jsonwebtoken");
const {addPostQuirey} = require('../database/queries');

const addPost = (req, res, next) => {
        const { title, content, username } = req.body;
        addPostQuirey([title, content, username])
          .then(() => res.json({ message: 'success', status: 201 }))
          .catch((err) => next(err));
      };


module.exports = addPost;