function Population(size) {
  this.boats = [];
  this.popsize = size;
  this.matingpool = [];

  for (var i = 0; i < this.popsize; i++) {
    this.boats[i] = new Boat();
  }

  this.evaluateGeneration = function() {
    
  }

  this.createGeneration = function() {
    var newBoats = [];
    for (var i = 0; i < this.boats.length; i++) {
      var parentA = random(this.matingpool).dna;
      var parentB = random(this.matingpool).dna;
      var childDna = parentA.crossover(parentB);

      childDna.mutation();
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
