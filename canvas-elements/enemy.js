
class Enemy {
  constructor(image, speed, height, animate){
    this.x = 950;
    this.y = height;
    this.dx = .09;
    this.image = image;
    this.speed = speed;
    this.index = 0;
    this.subIndex = 0;
    this.animate = animate;
  }

  enemyPos(){
    return [this.x, this.y];
  }

  draw(_ctx) {
        _ctx.drawImage(this.image,(this.index * 70), 36, 65, 30, this.x, this.y, 110, 65);
        if(this.x >= 0-95){
          this.x -= this.speed;
        }

        this.subIndex += this.animate;
        if( this.subIndex >= 80 ){
          this.index = (this.index + 1) % 2;
          this.subIndex = 0;
        }
  }

  collision(enemy, dog){
    if((enemy.enemyPos()[0] > 10 && enemy.enemyPos()[0] < 145) && (dog.dogPosition()[1] >= 325) && enemy.enemyPos()[1] === 335){
      return true;
    }else if ((enemy.enemyPos()[0] > 0 && enemy.enemyPos()[0] < 125) && (dog.dogPosition()[1] <= 300) && enemy.enemyPos()[1] === 275) {
      return true;
    }else{
      return false;
    }
  }
}

module.exports = Enemy;
