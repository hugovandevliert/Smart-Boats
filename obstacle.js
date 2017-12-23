function Obstacle(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;

  this.collision = function(boat) {
    if (boat.pos.x > this.x && boat.pos.x < this.x + this.w
        && boat.pos.y > this.y && boat.pos.y < this.y + this.h) {
      return true;
    } else {
      return false;
    }
  }
}
