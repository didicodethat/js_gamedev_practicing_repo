(function(self){
	self.engine = self.engine || {};
	var maps = self.config.maps;
	self.engine.prerenderMap = function(){
		var map, tile, tile_map, x, y;
		for(var mapName in maps){
			map = maps[mapName];
			tile = map.tile;
			tile_map = map.tile_map;
			for( y = 0; y < tile_map.length; y++){
				for (x = 0; x < tile_map[y].length; x++){
					
				}
			}
		}
	};
})(Game);