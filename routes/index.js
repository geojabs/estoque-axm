var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('login', { title: 'AXM - Fluxo de Estoque de Produtos' });
});

router.get('/sistema', function(req, res, next) {
	res.render('index', { title: 'AXM - Fluxo de Estoque de Produtos' });
});

module.exports = router;
