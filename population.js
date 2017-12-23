function Population(size) {
  this.boats = [];
  this.popsize = size;
  this.matingpool = [];

  for (var i = 0; i < this.popsize; i++) {
    this.boats[i] = new Boat();
  }

  this.run = function() {
    for (var i = 0; i < this.popsize; i++) {
      this.boats[i].update();
      this.boats[i].show();
    }
  }
}
