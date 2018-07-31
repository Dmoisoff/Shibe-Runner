
class Enemy {
  constructor(image, speed, height){
    this.x = 950;
    this.y = height;
    this.dx = .09;
    this.image = image;
    this.speed = speed;
  }

  enemyPos(){
    return [this.x, this.y];
  }

  draw(_ctx) {
        _ctx.drawImage(this.image , this.x, this.y, 95,65);
        if(this.x >= 0-95){
          this.x -= this.speed;
        }
  }

  collision(enemy, dog){
    if((enemy.enemyPos()[0] > 10 && enemy.enemyPos()[0] < 150) && (dog.dogPosition()[1] >= 325) && enemy.enemyPos()[1] === 335){
      return true;
    }else if ((enemy.enemyPos()[0] > 0 && enemy.enemyPos()[0] < 125) && (dog.dogPosition()[1] <= 300) && enemy.enemyPos()[1] === 275) {
      return true;
    }else{
      return false;
    }
  }
}

module.exports = Enemy;
