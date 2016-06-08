(function(){
	"use strict";

	angular.module('axmDirectives', [])
		.directive('selectProduto', selectProduto);

	
	function selectProduto()
	{
		return{
			templateUrl: '/partials/selectProdutoDirective.html'
		}
	}


})();