const Dog = require('./dog');
const Enemy = require('./enemy');
const Spirit = require('./spirit');
const Ground = require('./ground');
const Score = require('./score');

class Game{
  constructor(canvas, width, height, mountFuji, dogImage, enemyImage, spiritImage, groundImage){
    this.dog = new Dog(dogImage);
    this.enemyImage = enemyImage;
    this.spiritImage = spiritImage;
    this.groundImage = groundImage;
    canvas.width = width;
    canvas.height = height;
    this._width = width;
    this._height = height;
    this.image = mountFuji;
    this._ctx = canvas.getContext('2d');
    this._floor = this._floor.bind(this);
    this.KeyDownHandler = this.KeyDownHandler.bind(this);
    this.pauseHandler = this.pauseHandler.bind(this);
    this.enemyGenerator = this.enemyGenerator.bind(this);
    this.play = this.play.bind(this);
    // this.leaf = this.leaf.bind(this);
    this.count = 0;
    this.currentScore = 1;
    this.playGame = false;
    this.enemySpeed = 4;
    this.enemyheight = 335;
    this.pause = false;
    this.enemy = null;
    this.spirit = null;
    this.top = [];
    this.generatedScore = false;
  }

  play(enemy, spirit){
    this.count += 1;
    if(!this.playGame && this.currentScore === 1){
      // debugger
      // this.leaf()
      // this._ctx.drawImage(this.groundImage, 0, 395, 1000, 110);
      this.count -= 1;
      this.startGame();
      requestAnimationFrame(() => {this.play;});
    }else if (!this.playGame) {
      this.count = 0;
      this.dog.movementRate = 1;
      this.restartGame(enemy, spirit);
    }else if(this.pause){
      this.count -= 1;
      this.pauseGame(enemy,spirit);
    }else{
      this._ctx.clearRect(0,0,800,500);
      this.generateBackground(this.image);
      this._floor();
        if(!enemy){
          enemy = this.enemyGenerator(this.currentScore);
          if (spirit){
            if(this.enemySpiritCollision(enemy, spirit)){
              enemy = null;
            }else{
              enemy.draw(this._ctx);
            }
          }
          if(enemy){
            enemy.draw(this._ctx);
          }
        }else{
          enemy.draw(this._ctx);
        }

        if(!spirit && this.count < Math.floor(Math.random() * 31) + 50){
          spirit = null;
        }else if(!spirit){
          spirit = this.spiritGenerator(this.currentScore);
          if (spirit){
            if(this.enemySpiritCollision(enemy, spirit)){
              spirit = null;
            }else{
              spirit.draw(this._ctx);
            }
          }
        }else{
          spirit.draw(this._ctx);
        }
        if(enemy){
          if(enemy.collision(enemy, this.dog)){
            this.restartGame(enemy, spirit);
            requestAnimationFrame(() => {this.play(enemy, spirit);});
          }
        }
        if(spirit){
          if(spirit.collision(spirit, this.dog)){
            spirit = this.removeSpirit(spirit, enemy);
          }else if (spirit){
            spirit = this.removeSpirit(spirit, enemy);
          }
        }
      this.currentScore += 1;
      enemy = this.removeEnemy(enemy);
      this.dog.draw(this._ctx);
      this.drawScore(this._ctx);
      this.enemy = enemy;
      this.spirit = spirit;
      requestAnimationFrame(() => {this.play(enemy,spirit);});
    }
  }

  enemyGenerator(score){
    if(score % 500 > 200){
      this.enemySpeed += .4;
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
    _ctx.fillStyle = "rgba(0, 0, 0, 1)";
    _ctx.fillText(`Score: ${this.currentScore}`, 8, 20);
  }


  _drawBorder(){
    this._ctx.beginPath();
    this._ctx.rect(0, 0, this._width, this._height);
    this._ctx.stroke();
  }

  _floor(){
    let start = 52;
    for (let i = 0; i < 18; i++) {
      this._ctx.drawImage(this.groundImage, (start * i), 395, 52, 110);
    }
  }

  startGame(){
    // if(localStorage.topFive){
    //   this.top = localStorage.topFive.split(',');
    //   this.postScore();
    // }
    this.generateBackground(this.image);
    this._floor();
    document.addEventListener('keydown', this.KeyDownHandler, false);
    document.addEventListener('keydown', this.pauseHandler, false);
    this._ctx.fillStyle = 'rgba(128,128,128,.7)';
    this._ctx.fillRect(150, 75, 500, 300);
    this._ctx.font = "32px Shojumaru, cursive";
    this._ctx.fillStyle = "rgba(255,183,197,1)";
    this._ctx.fillText(`Press Enter`, 268, 115);
    this._ctx.fillText(`to start the game.`, 210, 155);
  }

  restartGame(enemy,spirit){
    this._ctx.clearRect(0,0,800,500);
    this.generateBackground(this.image);
    this._floor();
    enemy.draw(this._ctx);
    this.dog.draw(this._ctx);
    if(spirit){
      spirit.draw(this._ctx);
    }
    this._ctx.fillStyle = 'rgba(128,128,128,.7)';
    this._ctx.fillRect(150, 75, 500, 300);
    this._ctx.font = "32px Shojumaru, cursive";
    this._ctx.fillStyle = "rgba(255,183,197,1)";
    this._ctx.fillText(`Press Enter`, 268, 115);
    this._ctx.fillText(`to restart the game.`, 195, 155);
    this._ctx.fillText(`Your score was`, 220, 205);
    this._ctx.fillText(`${(this.currentScore - 1)}`, 370, 245);
    if(!this.generatedScore){

      this.topFive(this.currentScore);
      this.postScore();
      this.generatedScore = true;
    }

    this.playGame = false;
  }

  pauseGame(enemy,spirit){
    this._ctx.clearRect(0,0,800,500);
    this.generateBackground(this.image);
    this._floor();
    enemy.draw(this._ctx);
    this.dog.draw(this._ctx);
    if(spirit){
      spirit.draw(this._ctx);
    }
    this._ctx.fillStyle = 'rgba(128,128,128,.7)';
    this._ctx.fillRect(150, 75, 500, 300);
    this._ctx.font = "32px Arial";
    this._ctx.fillStyle = "rgba(255,183,197,1)";
    this._ctx.fillText(`The game is paused`, 245, 115);
    this._ctx.fillText(`press p to start.`, 280, 155);
    this._ctx.fillText(`Your current score is`, 245, 205);
    this._ctx.fillText(`${this.currentScore}`, 360, 245);
  }

  KeyDownHandler(e){
    if (!this.playGame) {
      if(e.keyCode === 13){
        this.playGame = true;
        this.currentScore = 1;
        this.enemySpeed = 4;
        this.generatedScore = false;
        this.play();
    }
    }
  }
  pauseHandler(e){
    if(this.playGame){
      if(e.keyCode === 80){
        this.pause = !this.pause;
        this.play(this.enemy,this.spirit);
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

  removeSpirit(spirit, enemy){
    if(spirit.collision(spirit, this.dog)){
      this.currentScore += 250;
      this.count = 0;
      return null;
    }
    // if(spirit.y === enemy.y && this.enemySpiritCollision(enemy, spirit)){
    //   return null;
    // }
    if(spirit.spiritPos()[0] < -95){
      return null;
    }else{
      return spirit;
    }
  }

  enemySpiritCollision(enemy, spirit){
    if(enemy && spirit){
      // debugger
      const spiritTime = (spirit.x/spirit.speed);
      const enemyTime = ((enemy.x /enemy.speed) + 200);
      if (spiritTime > enemyTime && spirit.y === enemy.y){
        // debugger
        return true;
      }
    }
    return false;
  }

  topFive(newScore){
    debugger
    let added = false;
    if (!this.top.length){
    return this.top = [newScore];
    }
    let newTop = this.top;
    for (let i = 0; i < this.top.length; i++) {
      if(this.top[i] <= newScore){
        newTop = ([...this.top.slice(0,i), newScore, ...this.top.slice(i)]);
        this.top = newTop;
        added = true;
        break;
      }
    }
    if(!added){
      newTop = [...this.top, newScore];
    }
    while(newTop.length > 5){
      newTop.pop();
    }
    this.top = newTop;
  }

  postScore(){
    // document.getElementById('scores').removeChild('li');
    for (let i = 0; i < this.top.length; i++) {
      let li = document.createElement('li');
      li.className += '' + 'control-instruction-styling';
      li.setAttribute("id", `score ${i}`);
      li.innerHTML = this.top[i];
      document.getElementById(`score ${i}`).replaceWith(li);
    }
    // localStorage['topFive'] = this.top;
  }



}




const pic1 = "images/PC Computer - Planet Centauri - Shiba_full.png";
const pic2 = "images/Hexen-Spirit.png";
const pic3 = "images/Mount_Fuji_from_mount_tanjo crop.jpg";
const pic4 = "images/download.png";
const pic5 = "images/PC Computer - Soreyuke Burunyanman Hardcore - Ghost_for_game.png";
const pic6 = "images/spirit_pixel_removed.png";
const pic7 = "images/groundfiles/Ground Tiles copy.png";
const pic8 = "images/Mount_Fuji_from_mount_tanjo crop_pixel.png";



function createImages(pic1, pic2, pic3){
  let dogImage = new Image();
  dogImage.src = pic1;
  dogImage.onload = () => {
    let enemyImage = new Image();
    enemyImage.src = pic2;
    enemyImage.onload = () => {
      let spiritImage = new Image();
      spiritImage.src = pic6;
      spiritImage.onload = () =>{
        let mountFuji = new Image();
        mountFuji.src = pic8;
        mountFuji.onload = () => {
          let groundImage = new Image();
          groundImage.src = pic7;
          groundImage.onload = () => {
            const game = new Game(document.getElementById('canvas'),800,500, mountFuji, dogImage, enemyImage, spiritImage, groundImage);
            game.play();
          };
        };
      };
    };
  };
}

createImages(pic1, pic2, pic3);
