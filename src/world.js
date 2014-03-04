var World = (function() {

	function World() {

	}

	World.prototype = {
		render : function() {
			SCENES[0].render();
		},
	};

	return World;
})();

var SCENES = [
{ //0, Main town
	render : function() {
		var xOff = 0;
		var yOff = STATUS_BAR_HEIGHT;

		ctx.fillStyle = "#228800";
		ctx.fillRect(0, 0, WIDTH, HEIGHT);

		ctx.fillStyle = "#555";
		ctx.fillRect(0+xOff, 100+yOff, WIDTH - xOff, 40);
		ctx.fillRect(0+xOff, 300+yOff, WIDTH - xOff, 40);
		ctx.fillRect(200+xOff, 100+yOff, 40, HEIGHT - yOff - 200);

		ctx.fillStyle = "#222";
		ctx.fillRect(0+xOff, 104+yOff, WIDTH - xOff, 32);
		ctx.fillRect(0+xOff, 304+yOff, WIDTH - xOff, 32);
		ctx.fillRect(204+xOff, 104+yOff, 32, HEIGHT - yOff - 200);
	},
}
];



var Entity = (function() {

	function Entity() {

	}

	Entity.prototype = {
		update : function() { },
		render : function() { },
	};

	return Entity;
})();