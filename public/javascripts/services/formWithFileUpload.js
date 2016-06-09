(function(){
	
	"use strict";

	angular.module('axmapp')
		.service('formWithFileUpload', formWithFileUpload);

	function formWithFileUpload($http)
	{
		this.post = function(uploadUrl, data)
		{
			var nameValue = data['name'];
			var fileValue = data['image'];
			var imageNameValue = data['image'].name;
			
			var reader  = new FileReader();
  			reader.onloadend = function () {   			
				
				var image64 = reader.result;
				var json = {name: nameValue, image:image64, imageName:imageNameValue};
				
				$http.post(uploadUrl, json).then(function(response){}, function(err){console.log(err)});
				
  			}
  			reader.readAsDataURL(fileValue);			
		}
	}

})();