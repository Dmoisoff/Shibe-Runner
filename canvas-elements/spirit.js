class Spirit {
  constructor(image, speed, height){
    this.image = image;
    this.x = 789;
    this.y = height;
    this.dx = .05;
    this.speed = speed;
  }
  spiritPos(){
    return [this.x, this.y];
  }

  draw(_ctx) {
        _ctx.drawImage(this.image , this.x, this.y, 95,65);
        if(this.x >= 0-95){
          this.x -= this.speed;
        }
  }

  collision(spirit, dog){
    if((spirit.spiritPos()[0] > 0 && spirit.spiritPos()[0] < 135) && (dog.dogPosition()[1] >= 325) && spirit.spiritPos()[1] === 335){
      return true;
    }else if ((spirit.spiritPos()[0] > 0 && spirit.spiritPos()[0] < 125) && (dog.dogPosition()[1] <= 300) && spirit.spiritPos()[1] === 275) {
      return true;
    }else{
      return false;
    }
  }


}


module.exports = Spirit;
