var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var c1image,c2image,c3image,c4image,track,ground;
function preload(){
c1image = loadImage("images/car1.png")
c2image= loadImage("images/car2.png")
c3image= loadImage("images/car3.png")
c4image= loadImage("images/car4.png")
track = loadImage("images/track.jpg")
ground = loadImage("images/ground.png")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end();
  }
}
