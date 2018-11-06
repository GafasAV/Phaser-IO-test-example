//Main game Obj
var game = new Phaser.Game(800, 500, Phaser.CANVAS, 'test-gui', {
	preload: preload,
	create: create
});

//Preload resources - 2 images for buttons
function preload() {

	console.log(dbgMsg('Preloading method...'));

	game.load.spritesheet('textButton', 'assets/buttons/text_button.png',200, 40);
	game.load.spritesheet('bgcolorButton', 'assets/buttons/bgcolor_button.png', 200, 40);

}


var textButton;
var bgcolorButton;

var background;

var bmpText;

//Main function for creating game-scene
//Create background adn two buttons
function create() {

	console.log(dbgMsg('Creating method...'));

	game.stage.background = "#101010";

 	textButton = game.add.button(game.world.centerX - 100, game.world.centerY - 25, 'textButton',
 							handlerTextButtonClick, this);

 	bgcolorButton = game.add.button(game.world.centerX - 100, game.world.centerY + 25, 'bgcolorButton',
 							handlerBgcolorButtonClick, this);
}

//On Click action for button_1
//Call the function for printing the text
function handlerTextButtonClick(){

	console.log(dbgMsg('1st Button Clicked...'));

	printText();
}

//On Click action for button_2
//Call the function for changing bg-color
function handlerBgcolorButtonClick(){

	console.log(dbgMsg('2nd Button Clicked...'));

	changeBgcolor();
}

//Print the text in the right-bottom corner
//Also set the text style and create the text Obj
function printText() {

	console.log(dbgMsg('Text printed...'));

	var style = { font: "bold 16px Arial",
			fill: "#fff",
			boundsAlignH: "center",
			boundsAlignV: "middle"
		};

	text = game.add.text(game.world.width - 75, game.world.height - 25, "Pop_Up !", style);
}

//Changes the bg-color
function changeBgcolor() {

 	console.log(dbgMsg('Changed...'));

	var color = Phaser.Color.getRandomColor(50, 255, 255);
 
	game.stage.backgroundColor = color;
}

//Simple "Debugging" msg formating
function dbgMsg(msg) {

	return '[DBG] ' + msg;
}