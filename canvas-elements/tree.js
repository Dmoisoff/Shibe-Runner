class Tree{
  constructor(image, x, speed){
    this.xPos = x;
    this.treeImage = image;
    this.dx = speed;
    this.index = 0;
    this.subIndex = 0;
    this.count = 0;
    this.movementRate = speed;
    this.treeFull = false;
    this.treeReverse = false;
  }

// this._ctx.drawImage(this.treeImage, 0, 747, 275, 350, 500, 220, 380, 270);
// this._ctx.drawImage(this.treeImage, 0, 747, 275, 350, 0, 220, 380, 270);
  draw(ctx){
    ctx.drawImage(this.treeImage, (this.index * 270), 747, 275, 350, this.xPos, 220, 200, 270);
    this.xPos -= this.dx;

    this.subIndex += this.movementRate;
    if( this.subIndex >= 1000 && !this.treeFull ){
      this.index = (this.index + 1) % 15;
      if(this.index * 270 === 3780){
        this.treeFull = true;
        this.treeReverse = true;
      }
      this.subIndex = 0;
    }

    if(this.treeFull){
      if(this.treeReverse){
        this.index - 1;
        if(this.index === 11){
          this.treeReverse = false;
        }else{
          this.index + 1;
          if(this.index === 14){
            this.treeReverse = true;
          }
        }
      }
    }

    this.count += 1;
    if (this.count === 1000 ) {
      this.movementRate += 1;
      this.dx += (this.movementRate / 2);
      this.count = 1;
    }

    if(this.xPos < 0 - 390){
      this.xPos = 1200;
    }
  }
}

module.exports = Tree;
