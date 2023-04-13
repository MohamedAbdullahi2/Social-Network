const router = require('express').Router();
const userRoute = require('./api/users');
const thoughtRoute = require('./api/thoughts');

router.use('/api/users', userRoute);
router.use('/api/thoughts', thoughtRoute);

module.exports = router;