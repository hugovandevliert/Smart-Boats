function Boat(dna) {
  this.pos = createVector(0, height / 2);
  this.vel = createVector();
  this.acc = createVector();
  this.completed = false;
  this.crashed = false;
  this.fitness = 0;
  if (dna) {
    this.dna = dna;
  } else {
    this.dna = new Dna();
  }

  this.calcFitness = function() {

  }

  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.update = function() {

  }

  this.show = function() {
    noStroke();
    fill(255);
    triangle(this.pos.x, this.pos.y, this.pos.x + 5, this.pos.y + 5, this.pos.x + 5, this.pos.y - 5);
    rect(this.pos.x + 5, this.pos.y - 5, 10, 10);
    triangle(this.pos.x + 20, this.pos.y, this.pos.x + 15, this.pos.y + 5, this.pos.x + 15, this.pos.y - 5);
  }
}
