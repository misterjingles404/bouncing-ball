class Ball {

  constructor(x, y, d) {
    this.x = x;
    this.y = y;
    this.diam = d;
    // this.C = [200, 200, 200];
  }

  move(randX, randY) {
    this.x = this.x + randX;
    this.y = this.y + randY;
  }

  turnWhite(x, y) {
    let d = dist(x, y, this.x, this.y);
    if (d < this.diam / 2) {
      return true;
    }
  }

  show(C) {
    strokeWeight(3);
    stroke(0);
    fill(C);
    ellipseMode(CENTER);
    ellipse(this.x, this.y, this.diam);
    
  }
}