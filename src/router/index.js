const router = require('express').Router();

const {
  redditHome,
  loginHandler,
  signUpHandler,
  pageNotFound,
  signUp,
  signIn,
  addPost,
} = require('../controllers');

router.get('/reddit', redditHome);
router.get('/login', loginHandler);
router.get('/signUp', signUpHandler);
router.post('/signUp', signUp);
router.post('/signin', signIn);
router.post('/addpost',addPost);
router.use(pageNotFound);

module.exports = router;
