(function(self){
	self.engine = self.engine || {};
	self.engine.preloadFiles = function(image_files,doneLoading){
		loadImages(image_files)
			.then(doneLoading, function(){ 
				alert(" File loading has failed. ");
			});	
	};
	function loadImages(imageCollection){
		var key;
		var images = {};
		var promises = [];
		for(key in imageCollection){
			var image = images[key] = new Image();
			image.src = imageCollection[key];
			
			promises.push(imageLoadPromise(image));
		}
		self.images = images;
		return Promise.all(promises);
	}
	function imageLoadPromise(image){
		return new Promise(function(success, fail){
			image.onload = success;
			image.onerror = fail;
		});
	}
})(Game);