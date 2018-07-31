const Dog = require('./dog');
const Enemy = require('./enemy');
const Spirit = require('./spirit');
const Ground = require('./ground');
const Score = require('./score');
const Leaf = require('./leaf');
const Tree = require('./tree');

class Game{
  constructor(canvas, width, height, mountFuji, dogImage, enemyImage, spiritImage, groundImage, cherryBlossems, treeImage){
    this.dog = new Dog(dogImage);
    this.enemyImage = enemyImage;
    this.spiritImage = spiritImage;
    this.groundImage = groundImage;
    this.cherryBlossems = cherryBlossems;
    this.treeImage = treeImage;
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
    this.leafGenerator = this.leafGenerator.bind(this);
    this.treeGenerator = this.treeGenerator.bind(this);
    this.leafDrawer = this.leafDrawer.bind(this);
    this.drawTrees = this.drawTrees.bind(this);
    this.count = 0;
    this.currentScore = null;
    this.playGame = false;
    this.enemySpeed = 10;
    this.enemyheight = 335;
    this.pause = false;
    this.enemy = null;
    this.spirit = null;
    this.top = [];
    this.generatedScore = false;
    this.generatedLeafs = false;
    this.generatedTrees = false;
    this.blossoms = [];
    this.trees = [];
    this.time = 0;
    this.environmentSpeed = 3;
  }

  play(enemy, spirit){
    if(this.time === 1000){
      this.time = 0;
      this.enemySpeed += 3;
    }
    this.count += 1;
    // debugger
    if(!this.playGame && (this.currentScore === null || this.currentScore.score() === 1)){
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
      this._ctx.clearRect(0,0,900,500);
      this.generateBackground(this.image);
      this._floor();
      this.drawTrees(this.ctx);
        if(!enemy){
          debugger
          enemy = this.enemyGenerator(this.currentScore.score());
          if (spirit){
            if(this.enemySpiritCollision(enemy, spirit)){
              debugger
              enemy = null;
            }else{
              enemy.draw(this._ctx);
            }
          }
        }else{
          enemy.draw(this._ctx);
        }

        if(!spirit && this.count < Math.floor(Math.random() * 31) + 50){
          spirit = null;
        }else if(!spirit){
          spirit = this.spiritGenerator(this.currentScore.score());
          // if (spirit){
          //   if(this.enemySpiritCollision(enemy, spirit)){
          //     debugger
          //     spirit = null;
          //   }else{
            // }
            spirit.draw(this._ctx);
          // }
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
      this.currentScore.updateScore(1);
      if(enemy){
        enemy = this.removeEnemy(enemy);
      }
      this.dog.draw(this._ctx);
      this.drawScore(this._ctx);
      this.enemy = enemy;
      this.spirit = spirit;
      this.time += 1;
      requestAnimationFrame(() => {this.play(enemy,spirit);});
    }
  }

  enemyGenerator(score){
    // if(score % 500 > 200){
    //   this.enemySpeed += .4;
    // }
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
      return this._ctx.drawImage(img, 0, 0, 900, 400);
  }

  drawScore(_ctx){
    _ctx.font = "16px Arial";
    _ctx.fillStyle = "rgba(255, 255, 255, 1)";
    _ctx.fillText(`Score: ${this.currentScore.score()}`, 8, 20);
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
    this.currentScore = new Score(1, this.top);
    this._ctx.clearRect(0,0,900,500);
    this.generateBackground(this.image);
    this.leafGenerator();
    debugger
    this.leafDrawer();
    this._floor();
    this.treeGenerator();
    // this._ctx.drawImage(this.treeImage, 0, 747, 275, 350, 0, 220, 380, 270);
    // this._ctx.drawImage(this.treeImage, 0, 747, 275, 350, 500, 220, 380, 270);
    document.addEventListener('keydown', this.KeyDownHandler, false);
    document.addEventListener('keydown', this.pauseHandler, false);
    this._ctx.fillStyle = 'rgba(128,128,128,.7)';
    this._ctx.fillRect(150, 75, 500, 300);
    // this._ctx.font = "32px Shojumaru, cursive";
    // this._ctx.font = "32px Unica One, cursive;";
    this._ctx.font = "32px Goudy Bookletter 1911, serif;";
    this._ctx.fillStyle = "rgba(255,183,197,1)";
    this._ctx.fillText(`Press Enter`, 268, 115);
    this._ctx.fillText(`to start the game.`, 210, 155);
  }

  restartGame(enemy,spirit){
    this._ctx.clearRect(0,0,900,500);
    this.generateBackground(this.image);
    // this.leafDrawer();
    this._floor();
    this.drawTrees(this.ctx);
    enemy.draw(this._ctx);
    this.dog.draw(this._ctx);
    if(spirit){
      spirit.draw(this._ctx);
    }
    this._ctx.fillStyle = 'rgba(128,128,128,.7)';
    this._ctx.fillRect(150, 75, 500, 300);
    // this._ctx.font = "32px Shojumaru, cursive";
    // this._ctx.font = "32px Unica One, cursive;";
    this._ctx.font = "32px Goudy Bookletter 1911, serif;";
    this._ctx.fillStyle = "rgba(255,183,197,1)";
    this._ctx.fillText(`Press Enter`, 268, 115);
    this._ctx.fillText(`to restart the game.`, 195, 155);
    this._ctx.fillText(`Your score was`, 220, 205);
    this._ctx.fillText(`${(this.currentScore.score() - 1)}`, 370, 245);
    // this._ctx.font = "28px Shojumaru, cursive";
    // this._ctx.fillText(`Please enter your name`, 180, 285);
    if(!this.generatedScore){

      this.currentScore.topFive(this.currentScore.score());
      this.currentScore.postScore();
      this.generatedScore = true;
    }

    this.playGame = false;
  }

  pauseGame(enemy,spirit){
    this._ctx.clearRect(0,0,800,500);
    this.generateBackground(this.image);
    this._floor();
    this.drawTrees(this.ctx);
    enemy.draw(this._ctx);
    this.dog.draw(this._ctx);
    if(spirit){
      spirit.draw(this._ctx);
    }
    this._ctx.fillStyle = 'rgba(128,128,128,.7)';
    this._ctx.fillRect(150, 75, 500, 300);
    // this._ctx.font = "32px Arial";
    // this._ctx.font = "32px Unica One, cursive;";
    this._ctx.font = "32px Goudy Bookletter 1911, serif;";
    this._ctx.fillStyle = "rgba(255,183,197,1)";
    this._ctx.fillText(`The game is paused`, 245, 115);
    this._ctx.fillText(`press p to start.`, 280, 155);
    this._ctx.fillText(`Your current score is`, 245, 205);
    this._ctx.fillText(`${this.currentScore.score()}`, 360, 245);
  }

  KeyDownHandler(e){
    if (!this.playGame) {
      if(e.keyCode === 13){
        this.playGame = true;
        this.currentScore.resetScore();
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
      this.currentScore.updateScore(250);
      this.count = 0;
      return null;
    }
    if(spirit.spiritPos()[0] < -95){
      return null;
    }else{
      return spirit;
    }
  }

  enemySpiritCollision(enemy, spirit){
    // if(spirit.y === enemy.y){
    // }
    if(enemy && spirit){
      const spiritTime = ((spirit.x - 75)/spirit.speed);
      const enemyTime = ((enemy.x - 75) /enemy.speed);
      if ((spiritTime + 30) > enemyTime && spirit.y === enemy.y){
        debugger
        return true;
      }
    }
    return false;
  }


  leafGenerator(){
    if(!this.generatedLeafs)
    for (let i = 0; i < 1; i++) {
      const leaf = new Leaf(this.cherryBlossems, 10 , 37 , 1);
      leaf.draw(this._ctx);
      this.blossoms.push(leaf);
    }
    this.generatedLeafs = true;
  }

  leafDrawer(){
    this.blossoms.forEach((leaf) =>{
      leaf.draw(this._ctx);
    });
  }

  treeGenerator(){
    if (!this.generatedTrees) {
      let x = 500;
      for (let i = 0; i < 3; i++) {
        debugger
        const tree = new Tree(this.treeImage, (x * i), this.environmentSpeed);
        tree.draw(this._ctx);
        this.trees.push(tree);
      }
    }
    this.generatedTrees = true;
  }

  drawTrees(ctx){
    debugger
    this.trees.forEach((tree) => {
      tree.draw(this._ctx);
    });
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
const pic9 = "images/cherry_blossems_sprites.png";
const pic10 = "images/kisspng-sprite-desktop-wallpaper-fruit-tree-fir-tree-5ace4a93d182a1.6415131015234689478582.png";
const pic11 = "images/fuji.gif";


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
        mountFuji.src = pic11;
        mountFuji.onload = () => {
          let cherryBlossems = new Image();
          cherryBlossems.src = pic9;
          cherryBlossems.onload = () =>{
            let groundImage = new Image();
            groundImage.src = pic7;
            groundImage.onload = () => {
              let treeImage = new Image();
              treeImage.src = pic10;
              treeImage.onload = () =>{
                const game = new Game(document.getElementById('canvas'),900,500, mountFuji, dogImage, enemyImage, spiritImage, groundImage, cherryBlossems, treeImage);
                game.play();
              };
            };
          };
        };
      };
    };
  };
}

createImages(pic1, pic2, pic3);
