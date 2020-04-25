const router = require('express').Router();
const userRoutes = require('./users.js');
const path = require('path');

// Your prefix for api calls
router.use('/api', userRoutes);

router.use(function(req, res) {
	res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

module.exports = router;