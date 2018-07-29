class Spirit {
  constructor(image, speed, height){
    this.image = image;
    this.x = 789;
    this.y = height;
    this.dx = .05;
    this.speed = speed;
    this.index = 0;
    this.subIndex = 0;
  }
  spiritPos(){
    return [this.x, this.y];
  }

  draw(_ctx) {
        _ctx.drawImage(this.image, this.index*650, 1266, 660, 619, this.x, this.y, 65, 60);
        if(this.x >= 0-95){
          this.x -= this.speed;
        }
        this.subIndex += 1;
        if( this.subIndex >= 10 ){
          this.index = (this.index + 1) % 3;
          this.subIndex = 0;
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
