const router = require('express').Router();
const userRoute = require('./api/users');
const thoughtRoute = require('./api/thoughts');

router.use('/users', userRoute);
router.use('/thoughts', thoughtRoute);

module.exports = router;