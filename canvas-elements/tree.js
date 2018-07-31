class Tree{
  constructor(image, x, speed){
    this.xPos = x;
    this.treeImage = image;
    this.dx = speed;
    this.index = 0;
    this.subIndex = 0;
    this.count = 0;
    this.movementRate = speed;
  }

// this._ctx.drawImage(this.treeImage, 0, 747, 275, 350, 500, 220, 380, 270);
// this._ctx.drawImage(this.treeImage, 0, 747, 275, 350, 0, 220, 380, 270);
  draw(ctx){
    ctx.drawImage(this.treeImage, 0, 747, 275, 350, this.xPos, 220, 380, 270);
    this.xPos -= this.dx;

    this.subIndex += this.movementRate;
    if( this.subIndex >= 10 ){
      this.index = (this.index + 1) % 5;
      this.subIndex = 0;
    }
    this.count += 1;
    if (this.count === 1000 ) {
      this.movementRate += 1;
      this.count = 1;
    }

    if(0 > this.xPos - 390){
      this.xPos = 800;
    }
  }
}

module.exports = Tree;
