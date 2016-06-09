(function(){
	"use strict";

	angular.module('axmapp')
	.controller('ProdutosController', produtosController);

	function produtosController($http, formWithFileUpload)
	{
		var viewModel = this;
		viewModel.product = {};
		viewModel.saveProduct = function()
		{
			var uploadUrl = '/upload';

			// Service is used to manage the transactions with the APIs
			// in a separate file.
			formWithFileUpload.post(uploadUrl, viewModel.product);
		}
	}


})();