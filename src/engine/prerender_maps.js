(function(self){
	self.engine = self.engine || {};
	var maps = self.config.maps;
	self.engine.prerenderMaps = function(){
		var map, tile, tileMap, 
		x, y,
		canvas,
		context,
		image;
		
		for(var mapName in maps){
			map = maps[mapName];
			image = self.images[map.spritesheet];
			tile = map.tile;
			tileMap = map.tile_map;

			canvas = document.createElement("canvas");
			document.getElementsByTagName('body')[0].appendChild(canvas);
			canvas.width = tileMap.length * tile.height;
			canvas.height = tileMap[0].length * tile.width;
			context = canvas.getContext('2d');

			context.fillRect(0,0,canvas.width, canvas.height);

			for(y = 0; y < tileMap.length; y++){
				for (x = 0; x < tileMap[y].length; x++){
					tile.x = map.int_to_tile[tileMap[y][x]][0]
					tile.y = map.int_to_tile[tileMap[y][x]][1]
					console.log(x*tile.width, y*tile.height);
					context.drawImage(
						image,
						tile.x, tile.y, tile.width, tile.height,
						x*tile.width, y*tile.height,
						tile.width, tile.height
					);
				}
			}

			(self.images || (self.images = {}))[mapName] = canvas;
		}
	};
})(Game);