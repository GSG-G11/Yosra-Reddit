const router = require('express').Router();

const {
  redditHome,
  loginHandler,
  signUpHandler,
  pageNotFound,
  signUp,
} = require('../controllers');

router.get('/', redditHome);
router.get('/login', loginHandler);
router.get('/signUp', signUpHandler);
router.post('/signUp', signUp);
router.use(pageNotFound);

module.exports = router;
