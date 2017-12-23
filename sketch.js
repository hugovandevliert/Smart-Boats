var population;
var populationSize = 20;
var target;
var lifespan = 500;
var moveCount = 0;
var generationCount = 1;
var obstacles = [];
var nrOfObstacles = 5;

function setup() {
  createCanvas(750,500);
  population = new Population(populationSize);
  target = createVector(50, 250, 25);

  for (var i = 0; i < nrOfObstacles; i++) {
    obstacles[i] = new Obstacle(random(100, 500), random(50, 450), random(50, 100), random(50, 100));
  }
}

function draw() {
  background(0);

  population.run();

  moveCount++;
  if (moveCount == lifespan) {
    population.evaluateGeneration();
    population.createGeneration();
    moveCount = 0;
    generationCount++;
  }

  fill(255, 0, 0);
  ellipse(target.x, target.y, 50);

  fill(100);
  noStroke();
  for (var i = 0; i < nrOfObstacles; i++) {
    rect(obstacles[i].x, obstacles[i].y, obstacles[i].w, obstacles[i].h);
  }

  fill(255);
  textSize(14);
  text('Move: ' + (moveCount + 1), 0, 484);
  text('Generation: ' + generationCount, 0, 499);

}
