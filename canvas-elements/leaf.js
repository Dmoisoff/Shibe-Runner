class Leaf{
  constructor(image, iteration, x, speed){
    this.image = image;
    this.xPos = ((iteration%24) * x);
    this.height = Math.floor(Math.random() * (400 - 0 + 1)) + 0;
    this.yPos = this.height;
    this.dx = speed;
    this.dy = speed;
    this.movementRate = speed;
    this.index = (iteration % 2);
    this.subIndex = 0;
    this.count = 0;
    this.xStart = this.xPos;
    this.yStart = 0 - this.height;
    if (iteration % 5 === 0) {
      this.animate = false;
    }else{
      this.animate = true;
    }
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
      if( this.subIndex >= 10 && this.animate){
        this.index = (this.index + 1) % 2;
        this.subIndex = 0;
      }
      this.count += 1;
      if (this.count === 1000 ) {
        this.movementRate += .1;
        this.dx += this.movementRate;
        this.dy += this.movementRate;
        this.count = 1;
      }

      if(this.yPos > 400){
        this.xPos = (this.xStart + Math.floor(Math.random() * (800 - 100 + 1)) + 100);
        this.yPos = -25;
      }
      //
      // // if(this.xPos < 800){
      // //   this.xPos = this.xStart;
      // //   this.yPos = 0;
      // // }
  }


}


module.exports = Leaf;
