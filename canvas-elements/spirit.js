class Spirit {
  constructor(canvas, width, height){
    this._ctx = canvas.getContext('2d');
    this._width = width;
    this._height = height;
    this.x = 789;
    this.y = 325;
    this.dx = .05;
  }

  draw() {
      this.makeBall();
      if(this.x + this.dx > this._width-this.ballRadius ) {
      this.dx = -this.dx;
      }
      if(this.x - this.dx < 0){
        this.x = 789;
      }
      this.x += this.dx;
  }
}


module.exports = Spirit;
