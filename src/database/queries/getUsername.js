const connection = require('../config/connections');

const getUsername = (email) => {
    return connection.query('SELECT username FROM users WHERE email = $1', [email]);
}

module.exports = getUsername;