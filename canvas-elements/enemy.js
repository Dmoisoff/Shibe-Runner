
class Enemy {
  constructor(canvas, width, height, image){
    this._ctx = canvas.getContext('2d');
    this._width = width;
    this._height = height;
    this.x = 780;
    this.y = 335;
    this.dx = .09;
    this.ballRadius = 10;
    this.image = image;
  }

  enemyPos(){
    return [this.x, this.y];
  }

  draw() {
        this._ctx.drawImage(this.image , this.x, this.y, 95,65);
        if(this.x >= 0-95){
          this.x -= .09;
        }
        if(this.x <= 0-95){
          this.x = 810;
        }

  }
}

module.exports = Enemy;
