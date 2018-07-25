class Game{
  constructor(canvas, width, height){
    canvas.width = width;
    canvas.height = height;
    this._width = width;
    this._height = height;
    this._ctx = canvas.getContext('2d');
    this.__clear = this._clear.bind(this);
  }


  //   this._ctx.clearRect(0, 0, innerWidth, innerHeight);
  //   this._ctx.beginPath();
  //   this._ctx.arc(xPos, yPos, radius, 0, Math.PI * 2, false);
  //   this._ctx.strokeStyle = 'blue';
  //   this._ctx.stroke();
  //
  //   if (xPos + radius > innerWidth || xPos - radius < 0) {
  //     dx = -dx;
  //   }
  //
  //   if (yPos + radius > innerHeight || yPos - radius < 0) {
  //     dy = -dy;
  //   }
  //   xPos += dx;
  //   yPos += dy;
  // };




  play(){
    this._clear;
    let img = new Image();
    img.src = "images/Mount_Fuji_from_mount_tanjo crop.jpg";
    img.onload = () => (
      this._ctx.drawImage(img, 0, 0, 800, 400)
    );
    this._ctx.fillStyle = 'rgba(146,98,57,1)';
    this._ctx.fillRect(0, 400, 1000, 100);
    setInterval(ball.draw.bind(ball),10);
    // let xPos = Math.random() * innerWidth;
    // let yPos = Math.random() * innerHeight;
    // let dx = (Math.random() - 0.5) * 10;
    // let dy = (Math.random() - 0.5) * 15;
    // const radius = 30;
    //
    // this._ctx.beginPath();
    // this._ctx.arc(xPos, yPos, radius, 0, Math.PI * 2, false);
    // this._ctx.strokeStyle = 'blue';
    // this._ctx.stroke();
    //
    // if (xPos + radius > innerWidth || xPos - radius < 0) {
    //   dx = -dx;
    // }
    //
    // if (yPos + radius > innerHeight || yPos - radius < 0) {
    //   dy = -dy;
    // }
    // xPos += dx;
    // yPos += dy;
    requestAnimationFrame(this.play.bind(this));
  }

  // _background(){
  //   let img = new Image();
  //   img.src = "images/Mount_Fuji_from_mount_tanjo.jpg";
  //   img.onload = () => (
  //     this._ctx.drawImage(img, 0, 0, 800, 500)
  //   );
  // }

  _clear(){
    this._ctx.clearRect(0, 0, this._width, this._height);
  }

  _drawBorder(){
    this._ctx.beginPath();
    this._ctx.rect(0, 0, this._width, this._height);
    this._ctx.stroke();
  }
}




class Ball {
  constructor(canvas, width, height){
    this._ctx = canvas.getContext('2d');
    this._width = width;
    this._height = height;
    this.x = Math.random() * width;
    this.y = 200;
    this.dx = 1;
    this.dy = -1;
    this.ballRadius = 10;
    this.makeBall = this.makeBall.bind(this);
  }


  makeBall() {
      this._ctx.beginPath();
      this._ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI*2);
      this._ctx.fillStyle = "#0095DD";
      this._ctx.fill();
      this._ctx.closePath();
  }

  draw() {
      this.makeBall();
      if(this.x + this.dx > this._width-this.ballRadius || this.x + this.dx < this.ballRadius) {
      this.dx = -this.dx;
      }
      if(this.y + this.dy > this._height-this.ballRadius || this.y + this.dy < this.ballRadius) {
          this.dy = -this.dy;
      }
      this.x += this.dx;
      this.y += this.dy;
  }
}


const game = new Game(document.getElementsByTagName('canvas')[0],800,500);
const ball = new Ball(document.getElementsByTagName('canvas')[0],800,500);
// game._background();
game.play();
// setInterval(game.draw, 10);
