function Population(size) {
  this.boats = [];
  this.popsize = size;

  for (var i = 0; i < this.popsize; i++) {
    this.boats[i] = new Boat();
  }

  this.evaluateGeneration = function() {
    var maxfit = 0;

    for (var i = 0; i < this.popsize; i++) {
      this.boats[i].calcFitness();

      if (this.boats[i].fitness > maxfit) {
        maxfit = this.boats[i].fitness;
      }
    }

    for (var i = 0; i < this.popsize; i++) {
      this.boats[i].fitness /= maxfit;
    }

    console.log(maxfit);

    this.matingpool = [];

    for (var i = 0; i < this.popsize; i++) {
      var n = this.boats[i].fitness * 100;
      for (var j = 0; j < n; j++) {
        this.matingpool.push(this.boats[i]);
      }
    }
  }

  this.createGeneration = function() {
    var newBoats = [];
    for (var i = 0; i < this.boats.length; i++) {
      var parentA = random(this.matingpool).dna;
      var parentB = random(this.matingpool).dna;
      var childDna = parentA.crossover(parentB);

      childDna.mutate();
      newBoats[i] = new Boat(childDna);
    }

    this.boats = newBoats;
  }

  this.run = function() {
    for (var i = 0; i < this.popsize; i++) {
      this.boats[i].update();
      this.boats[i].show();
    }
  }
}
