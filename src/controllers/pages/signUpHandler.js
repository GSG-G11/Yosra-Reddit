const {join} = require('path');

const signUpHandler = (req, res) => {
    res.sendFile(join(__dirname, '..', '..', '..', 'public', 'html', 'signUp.html'));
}

module.exports = signUpHandler;