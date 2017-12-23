var population;
var target;
var lifespan = 200;
var count = 0;
var boat;

function setup() {
  createCanvas(750,500);
  population = new Population(20);
  target = createVector(50, 250, 25);
}

function draw() {
  background(0);

  population.run();

  count++;
  if (count == lifespan) {
    population.evaluateGeneration();
    population.createGeneration();
    count = 0;
  }

  fill(255, 0, 0);
  ellipse(target.x, target.y, 20);
}
