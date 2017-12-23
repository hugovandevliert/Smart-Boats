function Boat(dna) {
  this.pos = createVector(725, height / 2);
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

    this.fitness = map(d, 0, width, width, 0);

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

    if (d < 5) {
      this.completed = true;
      this.pos = target.copy();
    }

    if (this.pos.x > width || this.pos.x < 0) {
      this.crashed = true;
    }
    if (this.pos.y > height || this.pos.y < 0) {
      this.crashed = true;
    }

    if (!this.completed && !this.crashed) {
      this.applyForce(this.dna.genes[count]);
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
    rotate(this.vel.heading());
    triangle(this.pos.x, this.pos.y, this.pos.x + 5, this.pos.y + 5, this.pos.x + 5, this.pos.y - 5);
    rect(this.pos.x + 5, this.pos.y - 5, 10, 10);
    triangle(this.pos.x + 20, this.pos.y, this.pos.x + 15, this.pos.y + 5, this.pos.x + 15, this.pos.y - 5);
    pop();
  }
}
