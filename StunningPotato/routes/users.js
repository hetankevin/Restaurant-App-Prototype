const io = require('socket.io-client');
var express = require('express');
var router = express.Router();
var url = require('url');
var socket = io.connect("http://localhost:3000/");

function getFormattedUrl(req) {
  return url.format({
    protocol: req.protocol,
    host: req.get('host')
  });
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  socket.on('user-number', function(userIndex){
    res.render('users', {user: userIndex});
  })
});



module.exports = router;
