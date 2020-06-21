var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readFile('/annarbor.json', (err, data) => {
    console.log(data);
    console.log(err);
    let json_data = data.toJSON();
    res.render('index', { title: 'Stunning Potato', places: json_data });
  });
});

module.exports = router;
