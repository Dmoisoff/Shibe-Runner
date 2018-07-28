const Dog = require('./dog');
const Enemy = require('./enemy');
const Spirit = require('./spirit');
const Score = require('./score');

class Game{
  constructor(canvas, width, height, mountFuji, dogImage, enemyImage){
    this.dog = new Dog(dogImage);
    this.enemyImage = enemyImage;
    canvas.width = width;
    canvas.height = height;
    this._width = width;
    this._height = height;
    this.image = mountFuji;
    this._ctx = canvas.getContext('2d');
    this._floor = this._floor.bind(this);
    this.KeyDownHandler = this.KeyDownHandler.bind(this);
    this.enemyGenerator = this.enemyGenerator.bind(this);
    this.play = this.play.bind(this);
    this.subIndex = 0;
    this.currentScore = 1;
    this.playGame = false;
    this.enemySpeed = 4;
    this.enemyGenerationRate = 1;
    this.enemyheight = 335;
  }

  enemyGenerator(enemySpeed, height){
    const enemy = new Enemy(this.enemyImage, enemySpeed, height);
    return enemy;
  }

  play(enemy){
    if(!this.playGame && this.currentScore === 1){
      this._floor();
      this.generateBackground(this.image);
      this.startGame();
      requestAnimationFrame(() => {this.play;});
    }else if (!this.playGame) {
      this.restartGame();
      requestAnimationFrame(() => {this.play;});
      }else{
      this.currentScore += 1;
      this._ctx.clearRect(0,0,800,500);
      this._floor();
      this.generateBackground(this.image);
      if (enemy) {
        debugger
        if(enemy.collision(enemy, this.dog)){
          this.restartGame();
          requestAnimationFrame(() => {this.play();});
        // if((enemy.enemyPos()[0] > 0 && enemy.enemyPos()[0] < 125) && (this.dog.dogPosition()[1] >= 335) && enemy.enemyPos()[1] === 335){
        //   // debugger
        //   this.restartGame();
        //   requestAnimationFrame(() => {this.play();});
        //   // window.alert(`gameover your score was ${this.currentScore}`);
        //   // document.location.reload();
        // }else if ((enemy.enemyPos()[0] > 0 && enemy.enemyPos()[0] < 125) && (this.dog.dogPosition()[1] <= 300) && enemy.enemyPos()[1] === 275) {
        //   this.restartGame();
        //   requestAnimationFrame(() => {this.play();});
        }else{
          enemy.draw(this._ctx);
          enemy = this.removeEnemy(enemy);
          this.dog.draw(this._ctx);
          this.drawScore(this._ctx);
          requestAnimationFrame(() => {this.play(enemy);});
        }
      }else{
        if(this.currentScore % 500 > 200){
            this.enemySpeed += 1;
          }
        if(this.currentScore % 600 > 400){
          // debugger
          this.enemyheight = 275;
        }else{
          this.enemyheight = 335;
        }
        enemy = this.enemyGenerator(this.enemySpeed, this.enemyheight);
        this.dog.draw(this._ctx);
        this.drawScore(this._ctx);
        requestAnimationFrame(() => {this.play(enemy);});
      }
    }
  }


  generateBackground(img){
      return this._ctx.drawImage(img, 0, 0, 800, 400);
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
    this._ctx.fillStyle = 'rgba(128,128,128,.7)';
    this._ctx.fillRect(150, 75, 500, 300);
    this._ctx.font = "32px Arial";
    this._ctx.fillStyle = "rgba(255,183,197,1)";
    this._ctx.fillText(`Press Enter`, 320, 115);
    this._ctx.fillText(`to start the game.`, 280, 155);
  }

  restartGame(){
    this._ctx.fillStyle = 'rgba(128,128,128,.7)';
    this._ctx.fillRect(150, 75, 500, 300);
    this._ctx.font = "32px Arial";
    this._ctx.fillStyle = "rgba(255,183,197,1)";
    this._ctx.fillText(`Press Enter`, 320, 115);
    this._ctx.fillText(`to restart the game.`, 280, 155);
    this._ctx.fillText(`Your score was`, 280, 205);
    this._ctx.fillText(`${this.currentScore}`, 360, 245);
    this.playGame = false;
  }

  KeyDownHandler(e){
    if (!this.playGame) {
      if(e.keyCode === 13){
        this.playGame = true;
        this.currentScore = 1;
        this.enemySpeed = 4;
        this.play();
    }
    }
  }

  removeEnemy(enemy){
    if(enemy.enemyPos()[0] < -95){
      return null;
    }else{
      return enemy;
    }
  }



}




const pic1 = "images/PC Computer - Planet Centauri - Shiba_full.png";
const pic2 = "images/Hexen-Spirit.png";
const pic3 = "images/Mount_Fuji_from_mount_tanjo crop.jpg";
const pic4 = "images/download.png";

function createImages(pic1, pic2, pic3){
  let dogImage = new Image();
  dogImage.src = pic1;
  dogImage.onload = () => {
    let enemyImage = new Image();
    enemyImage.src = pic2;
    enemyImage.onload = () => {
      let mountFuji = new Image();
      mountFuji.src = pic4;
      mountFuji.onload = () => {
        debugger
        // const enemy = new Enemy(document.getElementById('canvas'),800,500,enemyImage);
        // const dog = new Dog(document.getElementById('canvas'),800,500,dogImage);
        const game = new Game(document.getElementById('canvas'),800,500, mountFuji, dogImage, enemyImage );
        game.play();
      };
    };
  };
}

createImages(pic1, pic2, pic3);

// attachBackground(){
//   let img = new Image();
//   img.src = "images/Mount_Fuji_from_mount_tanjo crop.jpg";
//   return img;
// }

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
