const {join} = require('path');

const loginHandler = (req, res) => {
    res.sendFile(join(__dirname, '..', '..', '..', 'public', 'html', 'login.html'));
}

module.exports = loginHandler;