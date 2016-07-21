(function(self){
	var _x = 0;
	var _y = 1;
	var _width = 2;
	var _height = 3;

	self.systems = self.systems || {};
	self.systems.update_frame_animation = function(entity){
		var frame = entity.frame;
		var frame_animation = entity.frame_animation;
		
		if(!frame || !frame_animation) return;
		
		var frame_array = frame_animation.frame_array;
		var delayed_frames = frame_animation.delayed_frames;

		frame_animation.delay_count++;
		if(frame_animation.delay_count >= delayed_frames){
			frame_animation.delay_count = 0;
			updateFrameIndex(frame_animation);
		}

		var actual_frame = frame_array[frame_animation.frame_index];

		frame.x = actual_frame[_x];
		frame.y = actual_frame[_y];
		frame.width = actual_frame[_width];
		frame.height = actual_frame[_height];
	};

	function updateFrameIndex(frame_animation){
		frame_animation.frame_index++;

		if(frame_animation.frame_index >= frame_animation.frame_array.length){
			frame_animation.frame_index = 0;
		}
	}
})(Game);