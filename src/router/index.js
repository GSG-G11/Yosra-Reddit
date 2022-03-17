const router = require('express').Router();

const {
  redditHome,
  loginHandler,
  signUpHandler,
  pageNotFound,
  signUp,
  signIn,
  addPost,
  getpost,
  userPage,
} = require('../controllers');
const checkAuth = require('../middleware');

// router.use(checkAuth);
router.get('/reddit', redditHome);
router.get('/home',userPage);
router.get('/signin', loginHandler);
router.get('/signUp', signUpHandler);
router.get('/getpost', getpost);
router.post('/signUp', signUp);
router.post('/signin', signIn);
router.post('/addpost',addPost);
router.use(pageNotFound);

module.exports = router;
