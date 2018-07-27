const Dog = require('./dog');
const Enemy = require('./enemy');
const Spirit = require('./spirit');
const Score = require('./score');

class Game{
  constructor(canvas, width, height, image){
    // debugger
    canvas.width = width;
    canvas.height = height;
    this._width = width;
    this._height = height;
    this.image = image;
    this._ctx = canvas.getContext('2d');
    this._floor = this._floor.bind(this);
    this.KeyDownHandler = this.KeyDownHandler.bind(this);
    this.subIndex = 0;
    this.backgroundImage = this.attachBackground();
    this.currentScore = 1;
    this.playGame = false;
  }

  play(enemy, dog){
    // debugger
    if(!this.playGame && this.currentScore === 1){
      this._floor();
      this.generateBackground(this.backgroundImage);
      this.startGame();
      requestAnimationFrame(() => {this.play(enemy, dog);});
    }else if (!this.playGame) {
      this.restartGame();
      requestAnimationFrame(() => {this.play(enemy, dog);});
      }else{
      this.currentScore += 1;
      this._ctx.clearRect(0,0,800,500);
      this._floor();
      this.generateBackground(this.backgroundImage);
      if((enemy.enemyPos()[0] > 0 && enemy.enemyPos()[0] < 125) && dog.dogPosition()[1] >= 335){
        this.restartGame();
        requestAnimationFrame(() => {this.play(enemy, dog);});
        // window.alert(`gameover your score was ${this.currentScore}`);
        // document.location.reload();
      }else{
        enemy.draw(this._ctx);
        dog.draw(this._ctx);
        this.drawScore(this._ctx);
        requestAnimationFrame(() => {this.play(enemy, dog);});
      }
    }
  }

  attachBackground(){
    let img = new Image();
    img.src = "images/Mount_Fuji_from_mount_tanjo crop.jpg";
    return img;
  }

  generateBackground(img){
    if(!img.src){
      let img = new Image();
      img.src = "images/Mount_Fuji_from_mount_tanjo crop.jpg";
      return img.onload = () => (
        this._ctx.drawImage(img, 0, 0, 800, 400)
      );
    }else{
      return this._ctx.drawImage(img, 0, 0, 800, 400);
    }
  }

  drawScore(_ctx){
    _ctx.font = "16px Arial";
    _ctx.fillStyle = "#0095DD";
    _ctx.fillText(`Score: ${this.currentScore}`, 8, 20);
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

  startGame(){
    document.addEventListener('keydown', this.KeyDownHandler, false);
    this._ctx.fillStyle = 'rgba(128,128,128,.8)';
    this._ctx.fillRect(150, 75, 500, 300);
    this._ctx.font = "32px Arial";
    this._ctx.fillStyle = "rgba(255,183,197,1)";
    this._ctx.fillText(`Press Enter or Spacebar`, 225, 115);
    this._ctx.fillText(`to start the game.`, 280, 155);
  }

  restartGame(){
    this._ctx.fillStyle = 'rgba(128,128,128,.8)';
    this._ctx.fillRect(150, 75, 500, 300);
    this._ctx.font = "32px Arial";
    this._ctx.fillStyle = "rgba(255,183,197,1)";
    this._ctx.fillText(`Press Enter or Spacebar`, 225, 115);
    this._ctx.fillText(`to restart the game.`, 280, 155);
    this._ctx.fillText(`Your score was`, 280, 205);
    this._ctx.fillText(`${this.currentScore}`, 360, 245);
    this.playGame = false;
  }

  KeyDownHandler(e){
    debugger
    if (!this.playGame) {
      if(e.keyCode === 32 || e.keyCode === 13){
        this.playGame = true;
    }
    }
  }
}



// function drawDog(){
//   let img = new Image();
//   img.src = "images/shibe_1.png";
//   return img;
// }
// function drawDog1(){
//   let img = new Image();
//   img.src = "images/shibe.png";
//   return img;
// }

const pic1 = "images/PC Computer - Planet Centauri - Shiba_full.png";
const pic2 = "images/Hexen-Spirit.png";
const pic3 = "images/Mount_Fuji_from_mount_tanjo crop.jpg";

function createImages(pic1, pic2, pic3){
  let img = new Image();
  img.src = pic1;
  img.onload = () => {
    let img2 = new Image();
    img2.src = pic2;
    img2.onload = () => {
      let img3 = new Image();
      img3.src = pic3;
      img3.onload = () => {
        debugger
        const game = new Game(document.getElementById('canvas'),800,500, img);
        const enemy = new Enemy(document.getElementById('canvas'),800,500,img2);
        const dog = new Dog(document.getElementById('canvas'),800,500,img);
        game.play(enemy, dog);
      };
    };
  };
}

createImages(pic1, pic2, pic3);

// function drawDogs(){
//   let img = new Image();
//   img.src = "images/PC Computer - Planet Centauri - Shiba_full.png";
//   return img;
// }
//
// function drawEnemy(){
//   let img = new Image();
//   img.src = "images/Hexen-Spirit.png";
//   return img;
// }
//
// function drawBackground(){
//   let img = new Image();
//   img.src = "images/Mount_Fuji_from_mount_tanjo crop.jpg";
//   return img;
// }
//
//
//
// const game = new Game(document.getElementById('canvas'),800,500, drawBackground());
// const enemy = new Enemy(document.getElementById('canvas'),800,500,drawEnemy());
// // const enemy2 = new Enemy(document.getElementById('canvas'),800,500);
// // const spirit = new Spirit(document.getElementById('canvas'),800,500);
// const dog = new Dog(document.getElementById('canvas'),800,500,drawDogs());
// // const trees = new Trees(document.getElementById('canvas'),drawTrees());
// game.play();
