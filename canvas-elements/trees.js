function drawTrees(){
  let img = new Image();
  img.src = "images/kisspng-sprite-desktop-wallpaper-fruit-tree-fir-tree-5ace4a93d182a1.6415131015234689478582.png";
  return img;
}

class Trees{
  constructor(canvas,image){
    this._ctx = canvas.getContext('2d');
    this.trees = image;
  }

  draw(){
    this._ctx.drawImage(this.trees, 0, 747, 275, 350, 0, 185, 450, 340);
  }
}
