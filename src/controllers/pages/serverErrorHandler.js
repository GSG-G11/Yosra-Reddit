const {join} = require('path');

const serverErrorHandler = (req, res) => {
    res.sendFile(join(__dirname, '..', '..', '..', 'public', 'html', 'serverError.html'));
}

module.exports = serverErrorHandler;