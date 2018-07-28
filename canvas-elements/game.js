const Dog = require('./dog');
const Enemy = require('./enemy');
const Spirit = require('./spirit');
const Score = require('./score');

class Game{
  constructor(canvas, width, height, mountFuji, dogImage, enemyImage, spiritImage){
    this.dog = new Dog(dogImage);
    this.enemyImage = enemyImage;
    this.spiritImage = spiritImage;
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
    this.enemyheight = 335;
  }

  play(enemy, spirit){
    if(!this.playGame && this.currentScore === 1){
      debugger
      this.startGame();
      requestAnimationFrame(() => {this.play;});
    }else if (!this.playGame) {
      debugger
      this.restartGame(enemy);
    }else{
      this._ctx.clearRect(0,0,800,500);
      this._floor();
      this.generateBackground(this.image);
      if (!enemy || !spirit) {
        debugger
        if(!enemy ){
          enemy = this.enemyGenerator(this.currentScore);
        }
        if(!spirit){
          spirit = this.spiritGenerator(this.currentScore);
        }
        this.currentScore += 1;
        this.dog.draw(this._ctx);
        enemy.draw(this._ctx);
        spirit.draw(this._ctx);
        this.drawScore(this._ctx);
        requestAnimationFrame(() => {this.play(enemy, spirit);});
      }else if(enemy.collision(enemy, this.dog)){
        debugger
          this.restartGame(enemy, spirit);
          requestAnimationFrame(() => {this.play(enemy, spirit);});
      }else{
        debugger
        this.currentScore += 1;
        enemy.draw(this._ctx);
        spirit.draw(this._ctx);
        enemy = this.removeEnemy(enemy);
        spirit = this.removeSpirit(spirit);
        this.dog.draw(this._ctx);
        this.drawScore(this._ctx);
        requestAnimationFrame(() => {this.play(enemy,spirit);});
      }
    }
  }

  enemyGenerator(score){
    debugger
    if(score % 500 > 200){
      this.enemySpeed += .3;
    }
    if(score % 600 > 400){
      this.enemyheight = 275;
    }else{
      this.enemyheight = 335;
    }
    const enemy = new Enemy(this.enemyImage, this.enemySpeed, this.enemyheight);
    return enemy;
  }

  spiritGenerator(score){
    let height;
    if(this.enemyheight === 335){
      height = 275;
    }else{
      height = 335;
    }
    const spirit = new Spirit(this.spiritImage, this.enemySpeed, height);
    return spirit;
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
    this._floor();
    this.generateBackground(this.image);
    document.addEventListener('keydown', this.KeyDownHandler, false);
    this._ctx.fillStyle = 'rgba(128,128,128,.7)';
    this._ctx.fillRect(150, 75, 500, 300);
    this._ctx.font = "32px Arial";
    this._ctx.fillStyle = "rgba(255,183,197,1)";
    this._ctx.fillText(`Press Enter`, 320, 115);
    this._ctx.fillText(`to start the game.`, 280, 155);
  }

  restartGame(enemy){
    this._ctx.clearRect(0,0,800,500);
    this._floor();
    this.generateBackground(this.image);
    enemy.draw(this._ctx);
    this.dog.draw(this._ctx);
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

  removeSpirit(spirit){
    if(spirit.spiritPos()[0] < -95){
      return null;
    }else{
      return spirit;
    }
  }



}




const pic1 = "images/PC Computer - Planet Centauri - Shiba_full.png";
const pic2 = "images/Hexen-Spirit.png";
const pic3 = "images/Mount_Fuji_from_mount_tanjo crop.jpg";
const pic4 = "images/download.png";
const pic5 = "images/PC Computer - Soreyuke Burunyanman Hardcore - Ghost.png";

function createImages(pic1, pic2, pic3){
  let dogImage = new Image();
  dogImage.src = pic1;
  dogImage.onload = () => {
    let enemyImage = new Image();
    enemyImage.src = pic2;
    enemyImage.onload = () => {
      let spiritImage = new Image();
      spiritImage.src = pic5;
      spiritImage.onload = () =>{
        let mountFuji = new Image();
        mountFuji.src = pic4;
        mountFuji.onload = () => {
          const game = new Game(document.getElementById('canvas'),800,500, mountFuji, dogImage, enemyImage, spiritImage);
          game.play();
        };
      };
    };
  };
}

createImages(pic1, pic2, pic3);
