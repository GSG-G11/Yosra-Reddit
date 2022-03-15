const { join } = require("path");

const redditHome = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', '..', 'public', 'index.html'));
};

module.exports = redditHome;

