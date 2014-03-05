var WIDTH = 854;
var HEIGHT = 480;

var STATUS_BAR_HEIGHT = 48;

var canvas, ctx;
var world;

function initGraphics() {
	canvas = document.getElementById("gameCanvas");
	canvas.width = WIDTH;
	canvas.height = HEIGHT;

	ctx = canvas.getContext("2d");
}

function update() {
    world.update();
}

function render() {
	ctx.fillStyle = "#000";
	ctx.fillRect(0, 0, WIDTH, HEIGHT);

	world.render();

	//Status Bar
	ctx.fillStyle = "#000";
	ctx.fillRect(0, 0, WIDTH, STATUS_BAR_HEIGHT);
}

function main() {
	initGraphics();

	world = new World();

	new GameTimer().start();
}

window.onload = main;
