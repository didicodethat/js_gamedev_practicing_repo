(function(self){
	self.systems = self.systems || {};
	self.systems.draw = function(entity){
		var position = entity.position;
		var sprite = entity.sprite;
		var frame = entity.frame;
		if(!position || !sprite)
			return;
		var image = self.images[sprite.fileID];
		if(frame){
			self.context.drawImage(
				image, 
				frame.x, frame.y, frame.width, frame.height,
				position.x, position.y,
				frame.width, frame.height
			);
		}else{
			self.context.drawImage(image, position.x, position.y);
		}
	};
})(Game);