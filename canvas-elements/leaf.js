class Leaf{
  constructor(image, iteration, x, speed){
    this.image = image;
    this.xPos = (iteration * x);
    this.yPos = -50;
    this.dx = speed;
    this.dy = speed;
    this.movementRate = speed;
    this.index = 0;
    this.subIndex = 0;
    this.count = 0;
    this.xStart = (iteration * x);
    // this.yStart = 0;
  }
  pos(){
    return [this.xPos, this.yPos];
  }

  draw(ctx){
    // let dx = 0;
    // let dy = 395;
      ctx.drawImage(this.image, (this.index * 17), 0, 16, 18, this.xPos, this.yPos, 45, 45);
      this.yPos += this.dy;
      this.xPos -= this.dx;

      this.subIndex += this.movementRate;
      if( this.subIndex >= 10 ){
        this.index = (this.index + 1) % 2;
        this.subIndex = 0;
      }
      this.count += 1;
      if (this.count === 1000 ) {
        this.movementRate += .5;
        this.count = 1;
      }

      if(this.yPos > 400 || this.xPos > 800){
        this.xPos = this.xStart;
        this.yPos = 0;
      }
  }


}


module.exports = Leaf;
