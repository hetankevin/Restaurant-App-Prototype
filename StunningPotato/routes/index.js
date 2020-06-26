
var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {

  fs.readFile('public/annarbor.json', (err, data) => {
    if (err) throw err;
    let json_data = JSON.parse(data);
    res.render('index', { title: 'Stunning Potato', places: json_data });
  });

});

module.exports = router;
