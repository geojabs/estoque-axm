(function(){

	"use strict";

	angular.module('axmapp', [
		'axmapp.directives.selectProdutoDirective',
		'axmapp.directives.fileUploadDirective',
		'ngRoute' ]).config(function($routeProvider){
		
		$routeProvider.when('/',{
			templateUrl: 'partials/dashboard.html'
		});

		$routeProvider.when('/produtos',{
			templateUrl: 'partials/produtos.html',
			controller:'ProdutosController',
			controllerAs:'viewModel'
		});
		
		$routeProvider.when('/add-produtos',{
			templateUrl: 'partials/add-produtos.html',
			controller:'ProdutosController',
			controllerAs:'viewModel'	
		});
		
		$routeProvider.when('/fornecedores',{
			templateUrl: 'partials/fornecedores.html',
			controller:'FornecedoresController',
			controllerAs:'viewModel'
		});
		
		$routeProvider.when('/add-fornecedores',{
			templateUrl: 'partials/add-fornecedores.html',
			controller:'FornecedoresController',
			controllerAs:'viewModel'
		});
		
		$routeProvider.when('/compras',{
			templateUrl: 'partials/compras.html',
			controller: 'ComprasController',
			controllerAs:'viewModel'
		});
		
		$routeProvider.when('/add-compras',{
			templateUrl: 'partials/add-compras.html',
			controller: 'ComprasController',
			controllerAs:'viewModel'
		});
		
		$routeProvider.when('/baixa-estoque',{
			templateUrl: 'partials/baixa-estoque.html',
			controller: 'RetiradaDeProdutosController',
			controllerAs:'viewModel'
		});
		
		$routeProvider.when('/add-baixa-estoque',{
			templateUrl: 'partials/add-baixa-estoque.html',
			controller: 'RetiradaDeProdutosController',
			controllerAs:'viewModel'
		});
		
		$routeProvider.otherwise({
			templateUrl:'partials/page_not_found.html' 
		});
	});
	
})();




