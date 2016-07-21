(function(self){
	self.components = self.components || {};

	self.components.velocity = function(obj, x, y){
		obj.velocity = {
			x: x || 0,
			y: y || 0
		};
	}
})(Game);