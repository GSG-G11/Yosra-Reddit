const router = require('express').Router();

const {
  redditHome,
  loginHandler,
  signUpHandler,
  pageNotFound,
  signUp,
  signIn,
} = require('../controllers');

router.get('/reddit', redditHome);
router.get('/login', loginHandler);
router.get('/signUp', signUpHandler);
router.post('/signUp', signUp);
router.post('/signin', signIn);
router.use(pageNotFound);

module.exports = router;
