var population;
var populationSize = 20;
var target;
var lifespan = 350;
var moveCount = 0;
var generationCount = 1;
var boat;

function setup() {
  createCanvas(750,500);
  population = new Population(populationSize);
  target = createVector(50, 250, 25);
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
  ellipse(target.x, target.y, 20);

  fill(255);
  textSize(14);
  text('Move: ' + (moveCount + 1), 0, 484);
  text('Generation: ' + generationCount, 0, 499);

}
