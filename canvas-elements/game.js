class Game{
  constructor(canvas, width, height){
    canvas.width = width;
    canvas.height = height;
    this._width = width;
    this._height = height;
    this._ctx = canvas.getContext('2d');
    this.__clear = this._clear.bind(this);
    this._floor = this._floor.bind(this);
    this._reset = this._reset.bind(this);
  }

  play(){
    this._clear;
    let img = new Image();
    img.src = "images/Mount_Fuji_from_mount_tanjo crop.jpg";
    img.onload = () => (
      this._ctx.drawImage(img, 0, 0, 800, 400)
    );
    this._floor();
    if((enemy.enemyPos()[0] > 75 && enemy.enemyPos()[0] < 120) && dog.dogPosition()[1] >= 345){
      window.alert('game over');
      document.location.reload();
    }else{
      setInterval(enemy.draw.bind(enemy),10);
      // setInterval(spirit.draw.bind(spirit),10);
      setInterval(dog.draw.bind(dog),10);
      // setInterval(enemy2.draw.bind(enemy2),1);
      dog.dogPosition();
      requestAnimationFrame(this.play.bind(this));
    }
  }

  _clear(){
    this._ctx.clearRect(0, 0, this._width, this._height);
  }

  _drawBorder(){
    this._ctx.beginPath();
    this._ctx.rect(0, 0, this._width, this._height);
    this._ctx.stroke();
  }

  _floor(){
    this._ctx.fillStyle = 'rgba(146,98,57,1)';
    this._ctx.fillRect(0, 400, 1000, 100);
  }

  _reset(){
    enemy.enemyReset();
  }
}




class Enemy {
  constructor(canvas, width, height){
    this._ctx = canvas.getContext('2d');
    this._width = width;
    this._height = height;
    this.x = 810;
    this.y = 375;
    this.dx = .09;
    this.ballRadius = 10;
    this.makeBall = this.makeBall.bind(this);
  }


  makeBall() {
      this._ctx.beginPath();
      this._ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI*2);
      this._ctx.fillStyle = "Black";
      this._ctx.fill();
      this._ctx.closePath();
  }

  // enemyReset(){
  //   this.x = 789;
  //   this.y = 375;
  // }

  enemyPos(){
    return [this.x, this.y];
  }

  draw() {
      this.makeBall();
      if(this.x + this.dx > this._width-this.ballRadius+40 ) {
      this.dx = -this.dx;
      }
      if(this.x - this.dx < 0){
        this.x = 810;
      }
      this.x += this.dx;
  }
}

class Spirit {
  constructor(canvas, width, height){
    this._ctx = canvas.getContext('2d');
    this._width = width;
    this._height = height;
    this.x = 789;
    this.y = 325;
    this.dx = .05;
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
      if(this.x + this.dx > this._width-this.ballRadius ) {
      this.dx = -this.dx;
      }
      if(this.x - this.dx < 0){
        this.x = 789;
      }
      this.x += this.dx;

  }
}


class Dog{
  constructor(canvas, width, height, image){
    this._ctx = canvas.getContext('2d');
    this._width = width;
    this._height = height;
    this.xPos = 75;
    this.yPos = 345;
    this.ballRadius = 10;
    this.jump = false;
    // this.drawDog = this.drawDog.bind(this);
    this.dog = this._ctx.fillRect(this.xPos, this.yPos, 45, 45);
    this.KeyDownHandler = this.KeyDownHandler.bind(this);
    this.KeyUpHandler = this.KeyUpHandler.bind(this);
    this.arc = this.arc.bind(this);
    this.pexelDog = image;
  }

  KeyUpHandler(e){
    if(e.keyCode === 32 || e.keyCode === 38){
      this.jump = false;
    }
  }

  KeyDownHandler(e){
    if(e.keyCode === 32 || e.keyCode === 38){
      if(!this.yPos <= 355){
        this.jump = true;
      }
    }
  }

  dogPosition(){
    return [this.xPos, this.yPos];
  }



  arc(value){
    if(value < 300){
      return(0.1);
    }else{
      return(0.5);
    }
  }


  draw(){
    this._ctx.drawImage(this.pexelDog , this.xPos, this.yPos, 65, 65);
    document.addEventListener('keydown', this.KeyDownHandler, false);
    document.addEventListener('keyup', this.KeyUpHandler, false);
    if(this.jump && this.yPos > 250 ){
      this.yPos -= this.arc(this.yPos);
      if(this.yPos === 250)
      this.jump = false;
    }
    if(!this.jump && this.yPos <= 345 ){
      this.yPos += 0.5;
    }
    // else{
    //   this.yPos = 345;
    //   this.dog = this._ctx.fillRect(this.xPos, this.yPos, 45, 45);
    // }
  }
}

// class Grid{
//   constructor(canvas, width, height){
//     canvas.width = width;
//     canvas.height = height;
//     this._width = width;
//     this._height = height;
//     this._ctx = canvas.getContext('2d');
//   }
//
// draw(){
//   for (let x=0; x<=this._width; x+=20) {
//     for (let y=0; y <=this._height; y+=20) {
//       this._ctx.moveTo(x, 0);
//       this._ctx.lineTo(x, this._height);
//       this._ctx.stroke();
//       this._ctx.moveTo(0, y);
//       this._ctx.lineTo(this._width, y);
//       this._ctx.stroke();
//     }
//   }
// }
// }


function drawDog(){
  let img = new Image();
  img.src = "images/shibe_1.png";
  return img;
}

function drawEnemy(){
  let img = new Image();
  img.src = "images/Hexen-Spirit.png";
  return img;
}

const game = new Game(document.getElementsByTagName('canvas')[0],800,500);
const enemy = new Enemy(document.getElementsByTagName('canvas')[0],800,500,drawEnemy());
const enemy2 = new Enemy(document.getElementsByTagName('canvas')[0],800,500);
const spirit = new Spirit(document.getElementsByTagName('canvas')[0],800,500);
const grid = new Grid(document.getElementsByTagName('canvas')[0],800,500);
const dog = new Dog(document.getElementsByTagName('canvas')[0],800,500,drawDog());
game.play();
