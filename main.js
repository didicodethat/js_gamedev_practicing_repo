/* globals Game, _ */

'use strict';

var entities;

function init(){
	Game.context = Game.canvas.getContext('2d');
	preload();
	entities = _.range(100).map(function(){return {};});
	_.each(entities, function(e){ 
		Game.components.position(e, ((Math.random()*10)|0)*16, ((Math.random()*10)|0)*16);
		Game.components.frame(e, ((Math.random()*8)|0)*16, ((Math.random()*4)|0)*16, 16, 16);
		Game.components.frame_animation(e, 0, 5, Game.config.animations.blowhard_spritesheet.walk_down);
		Game.components.velocity(e, 0, 0);
		Game.components.acceleration(e, Math.random()*1, Math.random()*1);
		Game.components.sprite(e, "blowhard_spritesheet");
	});
// 
	preload(gameLoop);
}

function preload(done){
	Game.engine.preloadFiles(done);
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