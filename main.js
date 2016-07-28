/* globals Game, _ */

'use strict';

var entities;
var map = {};

function init(){
	Game.context = Game.canvas.getContext('2d');
	entities = _.range(1000).map(function(){return {};});
	Game.components.position(map, 0,0);
	Game.components.sprite(map, 'initial');

	_.each(entities, function(e){ 
		Game.components.position(e, ((Math.random()*10)|0)*16, ((Math.random()*10)|0)*16);
		Game.components.frame(e, ((Math.random()*8)|0)*16, ((Math.random()*4)|0)*16, 16, 16);
		Game.components.frame_animation(e, 0, 5, Game.config.animations.blowhard_spritesheet.walk_down);
		Game.components.velocity(e, 0, 1);
		// Game.components.acceleration(e, Math.random()*1, Math.random()*1);
		Game.components.sprite(e, "blowhard_spritesheet");
	});
	entities[0] = map;	
	preload(gameLoop);
}

function preload(done){
	Game.engine.preloadFiles(Game.config.image_files, function(){
		Game.engine.prerenderMaps();
		done();
	});
}

function gameLoop(){
	if(!Game.running) return;
	update();
	draw();
	setTimeout(gameLoop, 1000/60);
}

function update(){
	var entitiesLength = entities.length;

	for(var entityIndex = 0; entityIndex < entitiesLength; entityIndex++){
		Game.systems.update_frame_animation(entities[entityIndex]);
		Game.systems.update_position(entities[entityIndex]);
	}
}

function draw(){
	var entitiesLength = entities.length;
	Game.context.clearRect(0,0,800,800);
	for(var entityIndex = 0; entityIndex < entitiesLength; entityIndex++){
		Game.systems.draw(entities[entityIndex]);
	}
}

init();