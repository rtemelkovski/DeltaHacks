var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');





/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST LOGIN */
router.post('/login', function(req, res, next){
	var usr = req.body.usr;
	var pass = 
	res.send(usr);
});

/* GET LOGIN */
router.post('/login', function(req, res, next){
	res.send("FUCK YOU");
});

/* GET LOGIN */
router.post('/login', function(req, res, next){
	res.send("FUCK YOU");
});

/* GET LOGIN */
router.post('/login', function(req, res, next){
	res.send("FUCK YOU");
});

/* GET LOGIN */
router.post('/login', function(req, res, next){
	res.send("FUCK YOU");
});

module.exports = router;
