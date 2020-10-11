noseX = "";
noseY = "";

function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	gameOver = loadSound("gameover.wav");
	mario_die = loadSound("mariodie.wav");
	maio_kick = loadSound("kick.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
    canvas.parent('canvas');

	video = createCapture(VIDEO);
	video.size(800 , 400);
	video.parent('game_console');

	poseNet = ml5.poseNet(video , modalLoaded);
	poseNet.on('pose' , gotPoses);
	instializeInSetup(mario);
}

function modalLoaded() {
	console.log("modal is loaded");
}
function gotPoses(results) {
	if(results.length > 0) {
		console.log(results);
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
	}
}

function draw() {
	game()
}






