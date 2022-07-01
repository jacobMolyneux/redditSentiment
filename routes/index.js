var express = require('express');
var redditController = require('../controllers/redditController.js')
var router = express.Router();

/* GET home page. */
router.get('/', redditController.test)

module.exports = router;
