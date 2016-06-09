var express = require('express');
var router = express.Router();
var fs = require("fs");

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('login', { title: 'AXM - Fluxo de Estoque de Produtos' });
});

router.get('/sistema', function(req, res, next) {
	res.render('index', { title: 'AXM - Fluxo de Estoque de Produtos' });
});

router.post('/upload', function(req, res){
	var image = req.body.image;
	var data = image.replace(/^data:image\/\w+;base64,/, '');
	fs.writeFile('./products_imgs/'+req.body.imageName, data, {encoding: 'base64'}, function(err){
  		//Finished
	});
});

module.exports = router;
