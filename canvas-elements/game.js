const Dog = require('./dog');
const Enemy = require('./enemy');
const Spirit = require('./Spirit');

class Game{
  constructor(canvas, width, height, image){
    canvas.width = width;
    canvas.height = height;
    this._width = width;
    this._height = height;
    this.image = image;
    this._ctx = canvas.getContext('2d');
    this.__clear = this._clear.bind(this);
    this._floor = this._floor.bind(this);
    this._reset = this._reset.bind(this);
    this.subIndex = 0;
  }

  play(){
    this._clear;
    let img = new Image();
    img.src = "images/Mount_Fuji_from_mount_tanjo crop.jpg";
    img.onload = () => (
      this._ctx.drawImage(img, 0, 0, 800, 400)
    );
    this._floor();
    if((enemy.enemyPos()[0] > 0 && enemy.enemyPos()[0] < 125) && dog.dogPosition()[1] >= 335){
      window.alert('game over');
      document.location.reload();
    }else{
      setInterval(enemy.draw.bind(enemy),10);
      // setInterval(spirit.draw.bind(spirit),10);
      setInterval(dog.draw.bind(dog),10);
      // setInterval(trees.draw.bind(trees),10);
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






//
// class Enemy {
//   constructor(canvas, width, height, image){
//     this._ctx = canvas.getContext('2d');
//     this._width = width;
//     this._height = height;
//     this.x = 780;
//     this.y = 335;
//     this.dx = .09;
//     this.ballRadius = 10;
//     this.image = image;
//   }
//
//   enemyPos(){
//     return [this.x, this.y];
//   }
//
//   draw() {
//         this._ctx.drawImage(this.image , this.x, this.y, 95,65);
//         if(this.x >= 0-95){
//           this.x -= .09;
//         }
//         if(this.x <= 0-95){
//           this.x = 810;
//         }
//
//   }
// }

// class Spirit {
//   constructor(canvas, width, height){
//     this._ctx = canvas.getContext('2d');
//     this._width = width;
//     this._height = height;
//     this.x = 789;
//     this.y = 325;
//     this.dx = .05;
//   }
//
//   draw() {
//       this.makeBall();
//       if(this.x + this.dx > this._width-this.ballRadius ) {
//       this.dx = -this.dx;
//       }
//       if(this.x - this.dx < 0){
//         this.x = 789;
//       }
//       this.x += this.dx;
//   }
// }

//
// class Dog{
//   constructor(canvas, width, height, image){
//     this._ctx = canvas.getContext('2d');
//     this._width = width;
//     this._height = height;
//     this.xPos = 75;
//     this.yPos = 335;
//     this.ballRadius = 10;
//     this.jump = false;
//     this.KeyDownHandler = this.KeyDownHandler.bind(this);
//     this.KeyUpHandler = this.KeyUpHandler.bind(this);
//     this.arcUp = this.arcUp.bind(this);
//     this.arcDown = this.arcDown.bind(this);
//     this.pexelDog = image;
//     this.index = 0;
//     this.subIndex = 0;
//     document.addEventListener('keydown', this.KeyDownHandler, false);
//     document.addEventListener('keyup', this.KeyUpHandler, false);
//     this.inAir = false;
//   }
//
//   KeyUpHandler(e){
//     if(e.keyCode === 32 || e.keyCode === 38){
//       this.jump = false;
//       this.inAir = true;
//     }
//   }
//
//   KeyDownHandler(e){
//     if (!this.jump && !this.inAir) {
//       if(e.keyCode === 32 || e.keyCode === 38){
//         this.jump = true;
//     }
//     }
//   }
//
//   dogPosition(){
//     return [this.xPos, this.yPos];
//   }
//
//
//
//   arcUp(value){
//     if(value < 255){
//       return(0.05);
//     }else if(value < 300){
//       return(0.3);
//     }else{
//       return(0.5);
//     }
//   }
//
//   arcDown(value){
//     if(value < 300){
//       return(0.05);
//     }else if(value < 325){
//       return(0.3);
//     }else{
//       return(0.5);
//     }
//   }
//
//
//   draw(){
//     // this._ctx.drawImage(this.pexelDog, this.index*36, 0, 37,24, this.xPos, this.yPos, 80, 55);
//     this._ctx.drawImage(this.pexelDog, this.index*36.6, 264,  37.6,23.4, this.xPos, this.yPos, 85, 65);
//     if(this.jump && this.yPos > 235 ){
//       this.yPos -= this.arcUp(this.yPos);
//       if(Math.floor(this.yPos) === 235){
//         this.jump = false;
//         this.inAir = true;
//       }
//     }
//     if(this.inAir){
//       this.yPos += this.arcDown(this.yPos);
//       if(this.yPos >= 335){
//         this.inAir = false;
//       }
//     }
//     this.subIndex += 1;
//     if( this.subIndex === 600 ){
//       this.index = (this.index + 1) % 5;
//       this.subIndex = 0;
//     }
//   }
// }
//



function drawDog(){
  let img = new Image();
  img.src = "images/shibe_1.png";
  return img;
}
function drawDog1(){
  let img = new Image();
  img.src = "images/shibe.png";
  return img;
}
function drawDogs(){
  let img = new Image();
  img.src = "images/PC Computer - Planet Centauri - Shiba_full.png";
  return img;
}

function drawEnemy(){
  let img = new Image();
  img.src = "images/Hexen-Spirit.png";
  return img;
}

function drawBackground(){
  let img = new Image();
  img.src = "images/Mount_Fuji_from_mount_tanjo crop.jpg";
  return img;
}

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


const game = new Game(document.getElementsByTagName('canvas')[0],800,500, drawBackground());
const enemy = new Enemy(document.getElementsByTagName('canvas')[0],800,500,drawEnemy());
const enemy2 = new Enemy(document.getElementsByTagName('canvas')[0],800,500);
const spirit = new Spirit(document.getElementsByTagName('canvas')[0],800,500);
const dog = new Dog(document.getElementsByTagName('canvas')[0],800,500,drawDogs());
const trees = new Trees(document.getElementsByTagName('canvas')[0],drawTrees());
game.play();
