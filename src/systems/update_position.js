(function(self){
	self.systems = self.systems || {};
	self.systems.update_position = function(entity){
		var position = entity.position;
		var velocity = entity.velocity;
		var acceleration = entity.acceleration;
		if(!position || !velocity)
			return;

		if(acceleration){
			velocity.x += acceleration.x;
			velocity.y += acceleration.y;
		}
		
		position.x += velocity.x;
		position.y += velocity.y;
	};
})(Game);