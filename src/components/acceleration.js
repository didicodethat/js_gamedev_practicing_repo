(function(self){
	self.components = self.components || {};

	self.components.acceleration = function(obj, x, y){
		obj.acceleration = {
			x: x || 0,
			y: y || 0
		};
	}
})(Game);