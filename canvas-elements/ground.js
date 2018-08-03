class Ground {
  constructor(image, x, speed){
    this.xPos = x;
    this.groundImage = image;
    this.dx = speed;
    this.index = 0;
    this.subIndex = 0;
    this.count = 0;
    this.movementRate = speed;
  }


  draw(ctx){
    ctx.drawImage(this.groundImage, this.xPos, 395, 52, 110);
    this.xPos -= this.dx;

    // this.subIndex += this.movementRate;
    //   this.index = (this.index + 1) % 15;
    //   this.subIndex = 0;

    this.count += 1;
    if (this.count === 1000 ) {
      // debugger
      this.movementRate += 1;
      this.dx += (this.movementRate / 2);
      this.count = 1;
    }

    if(this.xPos < 0 - 100){
      this.xPos = 1000 + (this.xPos + 100);
    }
  }
}


module.exports = Ground;
