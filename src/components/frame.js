(function(self){
	
	self.components = self.components || {};

	self.components.frame = function(obj, x, y, width, height){
		obj.frame = {
			x: x,
			y: y,
			width: width,
			height: height
		};
	}
})(Game);