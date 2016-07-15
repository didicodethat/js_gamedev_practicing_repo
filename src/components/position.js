(function(self){
	
	self.components = self.components || {};

	self.components.position = function(obj, x, y){
		obj.position = {
			x: x,
			y: y
		};
	}
})(Game);