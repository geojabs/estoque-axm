var express = require('express');
var router = express.Router();
var fs = require("fs");

/* GET home page. */
router.get('/', function(req, res, next) {
	//res.render('login', { title: 'AXM - Fluxo de Estoque de Produtos' });
});

router.post('/save', function(req, res){
	
	uploadFile(req);
});


function uploadFile(req){
	var image = req.body.image;
	var data = image.replace(/^data:image\/\w+;base64,/, '');
	
	fs.writeFile('./public/products_imgs/'+req.body.imageName, data, {encoding: 'base64'}, function(err){
  		if(err) throw err;
	});
}

module.exports = router;
