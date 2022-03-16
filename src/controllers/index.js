const redditHome = require('./pages/redditHome');
const loginHandler = require('./pages/loginHandler');
const signUpHandler = require('./pages/signUpHandler');
const pageNotFound = require('./pages/pageNotFoundHandler');
const serverErrorHandler = require('./pages/serverErrorHandler');
const signUp = require('./signUp');
const signIn = require('./signIn');

module.exports = {
    redditHome,
    loginHandler,
    signUpHandler,
    pageNotFound,
    serverErrorHandler,
    signUp,
    signIn,
};
