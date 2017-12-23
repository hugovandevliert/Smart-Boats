function Boat(dna) {
  this.pos = createVector(width - 25, height / 2);
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
    var d = dist(this.pos.x, this.pos.y, target.x, target.y);
    this.fitness = width - d;

    if (this.completed) {
     this.fitness *= 10;
    }
    if (this.crashed) {
      this.fitness /= 10;
    }
  }

  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.update = function() {
    var d = dist(this.pos.x, this.pos.y, target.x, target.y);

    if (d < 20) {
      this.completed = true;
      this.pos = target.copy();
    }

    if (this.pos.x + 20 > width || this.pos.x < 0) {
      this.crashed = true;
    }
    if (this.pos.y + 5 > height || this.pos.y < 0) {
      this.crashed = true;
    }

    this.applyForce(this.dna.genes[moveCount]);

    if (!this.completed && !this.crashed) {
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.acc.mult(0);
      this.vel.limit(4);
    }
  }

  this.show = function() {
    push();
    noStroke();
    fill(255);
    translate(this.pos.x, this.pos.y);
    rotate(this.vel.heading());
    triangle(-5, -5, -5, 5, -10, 0);
    rectMode(CENTER);
    rect(0, 0, 10, 10);
    triangle(5, -5, 5, 5, 10, 0);
    pop();
  }
}
