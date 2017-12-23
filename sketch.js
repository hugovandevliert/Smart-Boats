var population;
var target;
var lifespan = 200;
var count = 0;
var boat;

function setup() {
  createCanvas(750,500);
  population = new Population(20);
}

function draw() {
  noStroke();
  background(0);
  fill(255, 0, 0);
  ellipse(700, 250, 25);
  
  population.run();
}
