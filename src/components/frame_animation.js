(function(self){
	
	self.components = self.components || {};

	self.components.frame_animation = function(obj, frame_index, delayed_frames, frame_array){
		obj.frame_animation = {
			frame_index: frame_index,
			delay_count: 0,
			delayed_frames: delayed_frames,
			frame_array: frame_array
		};
	}
})(Game);