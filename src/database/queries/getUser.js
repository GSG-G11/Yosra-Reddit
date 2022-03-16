const connection = require('../config/connections');

const getUser = (email) => {
    return connection.query('SELECT * FROM users WHERE email = $1', [email]);
}

module.exports = getUser;