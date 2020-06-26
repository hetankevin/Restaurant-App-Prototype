const io = require('socket.io-client');
var express = require('express');
var router = express.Router();

var socket = io.connect("http://localhost:3000/");

socket.on('user-number', function(userIndex){
  console.log("User", userIndex, "has connected");
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('index', {user: userIndex});
});



module.exports = router;
