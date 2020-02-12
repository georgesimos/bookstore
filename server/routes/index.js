const router = require('express').Router();

router.use('/api/books', require('./api/books'));

module.exports = router;
