/* globals Game, _ */

'use strict';

var entities;

function init(){
	Game.context = Game.canvas.getContext('2d');
	preload();
	entities = _.range(10000).map(function(){return {};});
	_.each(entities, function(e){ 
		Game.components.position(e, ((Math.random()*10)|0)*16, ((Math.random()*10)|0)*16);
		Game.components.frame(e, ((Math.random()*8)|0)*16, ((Math.random()*4)|0)*16, 16, 16);
		Game.components.sprite(e, "blowhard_spritesheet");
	});

	preload(gameLoop);
}

function preload(done){
	Game.engine.preloadFiles(done);
}

function gameLoop(){
	if(!Game.running) return;
	update();
	draw();
	requestAnimationFrame(gameLoop);
}

function update(){
	var entitiesLength = entities.length;
	for(var entityIndex = 0; entityIndex < entitiesLength; entityIndex++){
		entities[entityIndex].position.x = ((Math.random()*80)|0)*16;
		entities[entityIndex].position.y = ((Math.random()*80)|0)*16;
	}
}

function draw(){
	var entitiesLength = entities.length;
	// Game.context.clearRect(0,0,800,800);
	for(var entityIndex = 0; entityIndex < entitiesLength; entityIndex++){
		Game.systems.draw(entities[entityIndex]);
	}
}

init();