
var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

module.exports = router;
