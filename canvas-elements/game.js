class Game{
  constructor(canvas, width, height){
    canvas.width = width;
    canvas.height = height;
    this._width = width;
    this._height = height;
    this._ctx = canvas.getContext('2d');
    this.drawBall = this.drawBall.bind(this);
  }

  // play(){
  //
  //   requestAnimationFrame(this.play.bind(this));
  // }

  drawBall(){
    this._ctx.beginPath();
    this._ctx.arc(50, 50, 10, 0, Math.PI*2);
    this._ctx.fillStyle = "#0095DD";
    this._ctx.fill();
    this._ctx.closePath();
  }

  draw(){
    let x = this._width/2;
    let y = this._height-30;
    let dx = 2;
    let dy = -2;

    this.drawBall;
    x += dx;
    y += dy;
  }


  _background(){
    let img = new Image();
    img.src = "images/Mount_Fuji_from_mount_tanjo.jpg";
    img.onload = () => (
      this._ctx.drawImage(img, 0, 0, 800, 500)
    );
  }

  _clear(){
    this._ctx.clearRect(0, 0, this._width, this._height);
  }

  _drawBorder(){
    this._ctx.beginPath();
    this._ctx.rect(0, 0, this._width, this._height);
    this._ctx.stroke();
  }
}



const game = new Game(document.getElementsByTagName('canvas')[0],800,500);
game._background();
// game.play();
setInterval(game.draw, 10);
