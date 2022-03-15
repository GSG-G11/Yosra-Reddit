const {join} = require('path');

const pageNotFoundHandler = (req, res) => {
    res.sendFile(join(__dirname, '..', '..', '..', 'public', 'html', 'pageNotFound.html'));
}

module.exports = pageNotFoundHandler;