var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

});

router.get('/movie', require('./movie'));
router.use('/comment', require('./comment'));
router.use('/board', require('./board'));

module.exports = router;
