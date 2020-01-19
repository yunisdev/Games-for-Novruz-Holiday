
const SCL = 30;
var wOs, hOs;

var snake;

var score;
var food;
let sekerbura;
let qogal;
let paxlava;
let randomnumfood;
function preload(){
  sekerbura = loadImage('sekerbura.png');
  qogal = loadImage('qogal.png');
  paxlava = loadImage('paxlava.png');
}
function setup() {

  createCanvas(500, 500);

  wOs = width / SCL;
  hOs = height / SCL;

	// push snake the middle
	snake = new TileSnake(Math.floor(wOs / 2), Math.floor(hOs / 2));

  score = 0;
  food = newFood();

  textAlign(CENTER);
  textSize(SCL);

  frameRate(5);
}

function draw() {

  background(51);

	/* handle snake */
	if (snake.alive) {

		if (snake.update(food)) { // snake at food

			food = newFood();
			score+=randomnumfood;
		}
		snake.draw();
	} else {

		gameOver();
	}

	/* draw food */
  // fill(random(255), 0, random(255));
  // rect(food.x * SCL, food.y * SCL, SCL, SCL);
  // rect(x, y, w, h)
  randomnumfood = Math.floor(random(1,4));
  console.log(randomnumfood);
//image(sekerbura, food.x * SCL, food.y * SCL, SCL, SCL)
switch(randomnumfood){
  case 1:
    image(qogal, food.x * SCL, food.y * SCL, SCL, SCL);
    break;
  case 2:
    image(sekerbura, food.x * SCL, food.y * SCL, SCL, SCL);
    break;
  case 3:
    image(paxlava, food.x * SCL, food.y * SCL, SCL, SCL);
    break;
}
  /* draw score */
  text(score, SCL, height - SCL);
}

/**
 * stops game, displays end game
 */
function gameOver() {

  noLoop();
  textSize(60);
  text("Uduzdun!", width / 2, height / 2);
  textSize(30);
  text("Yenidən başlamaq üçün F5'ə bas", width / 2, height / 2 + 50);
}

/**
 * returns food at a random position
 */
function newFood() {

	var x = Math.floor(random(wOs));
	var y = Math.floor(random(hOs));

  return createVector(x, y);
}

/**
 * handle user input
 */
function keyPressed() {

  switch (keyCode) {

    case UP_ARROW:
      snake.direct(createVector(0, -1));
      break;

    case DOWN_ARROW:
      snake.direct(createVector(0, 1));
      break;

    case RIGHT_ARROW:
      snake.direct(createVector(1, 0));
      break;

    case LEFT_ARROW:
      snake.direct(createVector(-1, 0));
      break;

  }

}