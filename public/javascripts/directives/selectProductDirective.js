(function(){
	"use strict";

	angular.module('axmapp.directives.selectProdutoDirective', [])
		.directive('selectProduto', selectProduto);

	
	function selectProduto()
	{
		return{
			templateUrl: '/partials/selectProdutoDirective.html'
		}
	}


})();