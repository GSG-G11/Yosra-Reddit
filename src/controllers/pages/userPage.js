const {join} = require('path');

const userPage = (req, res) => {
    res.sendFile(join(__dirname, '..', '..', '..', 'public', 'html', 'home.html'));
}

module.exports = userPage;