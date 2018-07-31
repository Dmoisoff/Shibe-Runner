/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./canvas-elements/game.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./canvas-elements/dog.js":
/*!********************************!*\
  !*** ./canvas-elements/dog.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dog = function () {
  function Dog(image) {
    _classCallCheck(this, Dog);

    this.xPos = 75;
    this.yPos = 350;
    this.KeyDownHandler = this.KeyDownHandler.bind(this);
    this.KeyUpHandler = this.KeyUpHandler.bind(this);
    this.arcUp = this.arcUp.bind(this);
    this.arcDown = this.arcDown.bind(this);
    this.pexelDog = image;
    this.index = 0;
    this.subIndex = 0;
    document.addEventListener('keydown', this.KeyDownHandler, false);
    document.addEventListener('keyup', this.KeyUpHandler, false);
    this.jump = false;
    this.inAir = false;
    this.count = 0;
    this.movementRate = 1;
    this.spriteSpeed = 1;
  }

  _createClass(Dog, [{
    key: 'KeyUpHandler',
    value: function KeyUpHandler(e) {
      if (e.keyCode === 32 || e.keyCode === 38) {
        this.jump = false;
        this.inAir = true;
      }
    }
  }, {
    key: 'KeyDownHandler',
    value: function KeyDownHandler(e) {
      if (!this.jump && !this.inAir) {
        if (e.keyCode === 32 || e.keyCode === 38) {
          this.jump = true;
        }
      }
    }
  }, {
    key: 'dogPosition',
    value: function dogPosition() {
      return [this.xPos, this.yPos];
    }
  }, {
    key: 'arcUp',
    value: function arcUp(value) {
      if (value < 255) {
        return 2;
        // }else if(value < 300){
        //   return(3);
      } else {
        return 5;
      }
    }
  }, {
    key: 'arcDown',
    value: function arcDown(value) {
      if (value < 300) {
        return 3;
        // }else if(value < 325){
        //   return(3);
      } else {
        return 4;
      }
    }
  }, {
    key: 'draw',
    value: function draw(_ctx) {
      // debugger
      // _ctx.clearRect(0,0,800,500);
      // debugger
      // _ctx.drawImage(this.pexelDog, this.index*36, 0, 37,24, this.xPos, this.yPos, 80, 55);
      _ctx.drawImage(this.pexelDog, this.index * 36.6, 264, 37.6, 23.4, this.xPos, this.yPos, 85, 65);
      if (this.jump && this.yPos > 235) {
        this.yPos -= this.arcUp(this.yPos);
        if (Math.floor(this.yPos) <= 235) {
          this.inAir = true;
          this.jump = false;
        }
      }
      if (this.inAir) {
        this.yPos += this.arcDown(this.yPos);
        if (this.yPos >= 348) {
          this.inAir = false;
        }
      }
      this.subIndex += this.spriteSpeed;
      if (this.subIndex >= 10) {
        this.index = (this.index + 1) % 5;
        this.subIndex = 0;
      }
      this.count += 1;
      if (this.count === 1000) {
        this.movementRate += 5;
        this.count = 1;
        this.spriteSpeed += .5;
      }
    }
  }]);

  return Dog;
}();

module.exports = Dog;

/***/ }),

/***/ "./canvas-elements/enemy.js":
/*!**********************************!*\
  !*** ./canvas-elements/enemy.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Enemy = function () {
  function Enemy(image, speed, height) {
    _classCallCheck(this, Enemy);

    this.x = 950;
    this.y = height;
    this.dx = .09;
    this.image = image;
    this.speed = speed;
  }

  _createClass(Enemy, [{
    key: "enemyPos",
    value: function enemyPos() {
      return [this.x, this.y];
    }
  }, {
    key: "draw",
    value: function draw(_ctx) {
      _ctx.drawImage(this.image, this.x, this.y, 95, 65);
      if (this.x >= 0 - 95) {
        this.x -= this.speed;
      }
    }
  }, {
    key: "collision",
    value: function collision(enemy, dog) {
      if (enemy.enemyPos()[0] > 10 && enemy.enemyPos()[0] < 150 && dog.dogPosition()[1] >= 325 && enemy.enemyPos()[1] === 335) {
        return true;
      } else if (enemy.enemyPos()[0] > 0 && enemy.enemyPos()[0] < 125 && dog.dogPosition()[1] <= 300 && enemy.enemyPos()[1] === 275) {
        return true;
      } else {
        return false;
      }
    }
  }]);

  return Enemy;
}();

module.exports = Enemy;

/***/ }),

/***/ "./canvas-elements/game.js":
/*!*********************************!*\
  !*** ./canvas-elements/game.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dog = __webpack_require__(/*! ./dog */ "./canvas-elements/dog.js");
var Enemy = __webpack_require__(/*! ./enemy */ "./canvas-elements/enemy.js");
var Spirit = __webpack_require__(/*! ./spirit */ "./canvas-elements/spirit.js");
var Ground = __webpack_require__(/*! ./ground */ "./canvas-elements/ground.js");
var Score = __webpack_require__(/*! ./score */ "./canvas-elements/score.js");
var Leaf = __webpack_require__(/*! ./leaf */ "./canvas-elements/leaf.js");
var Tree = __webpack_require__(/*! ./tree */ "./canvas-elements/tree.js");

var Game = function () {
  function Game(canvas, width, height, mountFuji, dogImage, enemyImage, spiritImage, groundImage, cherryBlossems, treeImage) {
    _classCallCheck(this, Game);

    this.dog = new Dog(dogImage);
    this.dogImage = dogImage;
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
    this.enemySpeed = 13;
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

  _createClass(Game, [{
    key: 'play',
    value: function play(enemy, spirit) {
      var _this = this;

      if (this.time === 1000) {
        this.time = 0;
        this.enemySpeed += 3;
      }
      this.count += 1;
      // debugger
      if (!this.playGame && (this.currentScore === null || this.currentScore.score() === 1)) {
        this.count -= 1;
        this.startGame();
        requestAnimationFrame(function () {
          _this.play;
        });
      } else if (!this.playGame) {
        this.count = 0;
        this.dog.movementRate = 1;
        this.restartGame(enemy, spirit);
      } else if (this.pause) {
        this.count -= 1;
        this.pauseGame(enemy, spirit);
      } else {
        if (!this.generatedTrees) {
          this.treeGenerator();
          this.dog = new Dog(this.dogImage);
        }
        this._ctx.clearRect(0, 0, 900, 500);
        this.generateBackground(this.image);
        this._floor();
        this.drawTrees(this.ctx);
        if (!enemy) {
          debugger;
          enemy = this.enemyGenerator(this.currentScore.score());
          if (spirit) {
            if (this.enemySpiritCollision(enemy, spirit)) {
              debugger;
              enemy = null;
            } else {
              enemy.draw(this._ctx);
            }
          }
        } else {
          enemy.draw(this._ctx);
        }

        if (!spirit && this.count < Math.floor(Math.random() * 21) + 80) {
          spirit = null;
        } else if (!spirit) {
          spirit = this.spiritGenerator(this.currentScore.score());
          // if (spirit){
          //   if(this.enemySpiritCollision(enemy, spirit)){
          //     debugger
          //     spirit = null;
          //   }else{
          // }
          spirit.draw(this._ctx);
          // }
        } else {
          spirit.draw(this._ctx);
        }
        if (enemy) {
          if (enemy.collision(enemy, this.dog)) {
            this.restartGame(enemy, spirit);
            requestAnimationFrame(function () {
              _this.play(enemy, spirit);
            });
          }
        }
        if (spirit) {
          if (spirit.collision(spirit, this.dog)) {
            spirit = this.removeSpirit(spirit, enemy);
          } else if (spirit) {
            spirit = this.removeSpirit(spirit, enemy);
          }
        }
        this.currentScore.updateScore(1);
        if (enemy) {
          enemy = this.removeEnemy(enemy);
        }
        this.dog.draw(this._ctx);
        this.drawScore(this._ctx);
        this.enemy = enemy;
        this.spirit = spirit;
        this.time += 1;
        requestAnimationFrame(function () {
          _this.play(enemy, spirit);
        });
      }
    }
  }, {
    key: 'enemyGenerator',
    value: function enemyGenerator(score) {
      // if(score % 500 > 200){
      //   this.enemySpeed += .4;
      // }
      if (score % 600 > 400) {
        this.enemyheight = 275;
      } else {
        this.enemyheight = 335;
      }
      var enemy = new Enemy(this.enemyImage, this.enemySpeed, this.enemyheight);
      return enemy;
    }
  }, {
    key: 'spiritGenerator',
    value: function spiritGenerator(score) {
      var height = void 0;
      if (this.enemyheight === 335) {
        height = 275;
      } else {
        height = 335;
      }
      var spirit = new Spirit(this.spiritImage, this.enemySpeed, height);
      return spirit;
    }
  }, {
    key: 'generateBackground',
    value: function generateBackground(img) {
      return this._ctx.drawImage(img, 0, 0, 900, 400);
    }
  }, {
    key: 'drawScore',
    value: function drawScore(_ctx) {
      _ctx.font = "16px Arial";
      _ctx.fillStyle = "rgba(255, 255, 255, 1)";
      _ctx.fillText('Score: ' + this.currentScore.score(), 8, 20);
    }
  }, {
    key: '_drawBorder',
    value: function _drawBorder() {
      this._ctx.beginPath();
      this._ctx.rect(0, 0, this._width, this._height);
      this._ctx.stroke();
    }
  }, {
    key: '_floor',
    value: function _floor() {
      var start = 52;
      for (var i = 0; i < 18; i++) {
        this._ctx.drawImage(this.groundImage, start * i, 395, 52, 110);
      }
    }
  }, {
    key: 'startGame',
    value: function startGame() {
      // if(localStorage.topFive){
      //   this.top = localStorage.topFive.split(',');
      //   this.postScore();
      // }
      this.currentScore = new Score(1, this.top);
      this._ctx.clearRect(0, 0, 900, 500);
      this.generateBackground(this.image);
      this.leafGenerator();
      debugger;
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
      this._ctx.fillText('Press Enter', 268, 115);
      this._ctx.fillText('to start the game.', 210, 155);
    }
  }, {
    key: 'restartGame',
    value: function restartGame(enemy, spirit) {
      this._ctx.clearRect(0, 0, 900, 500);
      this.generateBackground(this.image);
      // this.leafDrawer();
      this._floor();
      this.generatedTrees = false;
      this.drawTrees(this.ctx);
      enemy.draw(this._ctx);
      this.dog.draw(this._ctx);
      if (spirit) {
        spirit.draw(this._ctx);
      }
      this._ctx.fillStyle = 'rgba(128,128,128,.7)';
      this._ctx.fillRect(150, 75, 500, 300);
      // this._ctx.font = "32px Shojumaru, cursive";
      // this._ctx.font = "32px Unica One, cursive;";
      this._ctx.font = "32px Goudy Bookletter 1911, serif;";
      this._ctx.fillStyle = "rgba(255,183,197,1)";
      this._ctx.fillText('Press Enter', 268, 115);
      this._ctx.fillText('to restart the game.', 195, 155);
      this._ctx.fillText('Your score was', 220, 205);
      this._ctx.fillText('' + (this.currentScore.score() - 1), 370, 245);
      // this._ctx.font = "28px Shojumaru, cursive";
      // this._ctx.fillText(`Please enter your name`, 180, 285);
      if (!this.generatedScore) {

        this.currentScore.topFive(this.currentScore.score());
        this.currentScore.postScore();
        this.generatedScore = true;
      }

      this.playGame = false;
    }
  }, {
    key: 'pauseGame',
    value: function pauseGame(enemy, spirit) {
      this._ctx.clearRect(0, 0, 800, 500);
      this.generateBackground(this.image);
      this._floor();
      this.drawTrees(this.ctx);
      enemy.draw(this._ctx);
      this.dog.draw(this._ctx);
      if (spirit) {
        spirit.draw(this._ctx);
      }
      this._ctx.fillStyle = 'rgba(128,128,128,.7)';
      this._ctx.fillRect(150, 75, 500, 300);
      // this._ctx.font = "32px Arial";
      // this._ctx.font = "32px Unica One, cursive;";
      this._ctx.font = "32px Goudy Bookletter 1911, serif;";
      this._ctx.fillStyle = "rgba(255,183,197,1)";
      this._ctx.fillText('The game is paused', 245, 115);
      this._ctx.fillText('press p to start.', 280, 155);
      this._ctx.fillText('Your current score is', 245, 205);
      this._ctx.fillText('' + this.currentScore.score(), 360, 245);
    }
  }, {
    key: 'KeyDownHandler',
    value: function KeyDownHandler(e) {
      if (!this.playGame) {
        if (e.keyCode === 13) {
          this.playGame = true;
          this.currentScore.resetScore();
          this.enemySpeed = 4;
          this.generatedScore = false;
          this.play();
        }
      }
    }
  }, {
    key: 'pauseHandler',
    value: function pauseHandler(e) {
      if (this.playGame) {
        if (e.keyCode === 80) {
          this.pause = !this.pause;
          this.play(this.enemy, this.spirit);
        }
      }
    }
  }, {
    key: 'removeEnemy',
    value: function removeEnemy(enemy) {
      if (enemy.enemyPos()[0] < -95) {
        return null;
      } else {
        return enemy;
      }
    }
  }, {
    key: 'removeSpirit',
    value: function removeSpirit(spirit, enemy) {
      if (spirit.collision(spirit, this.dog)) {
        this.currentScore.updateScore(250);
        this.count = 0;
        return null;
      }
      if (spirit.spiritPos()[0] < -95) {
        return null;
      } else {
        return spirit;
      }
    }
  }, {
    key: 'enemySpiritCollision',
    value: function enemySpiritCollision(enemy, spirit) {
      // if(spirit.y === enemy.y){
      // }
      if (enemy && spirit) {
        var spiritTime = (spirit.x - 75) / spirit.speed;
        var enemyTime = (enemy.x - 75) / enemy.speed;
        if (spiritTime + 30 > enemyTime && spirit.y === enemy.y) {
          debugger;
          return true;
        }
      }
      return false;
    }
  }, {
    key: 'leafGenerator',
    value: function leafGenerator() {
      if (!this.generatedLeafs) for (var i = 0; i < 1; i++) {
        var leaf = new Leaf(this.cherryBlossems, 10, 37, 1);
        leaf.draw(this._ctx);
        this.blossoms.push(leaf);
      }
      this.generatedLeafs = true;
    }
  }, {
    key: 'leafDrawer',
    value: function leafDrawer() {
      var _this2 = this;

      this.blossoms.forEach(function (leaf) {
        leaf.draw(_this2._ctx);
      });
    }
  }, {
    key: 'treeGenerator',
    value: function treeGenerator() {
      if (!this.generatedTrees) {
        this.trees = [];
        var x = 500;
        for (var i = 0; i < 3; i++) {
          debugger;
          var tree = new Tree(this.treeImage, x * i, this.environmentSpeed);
          tree.draw(this._ctx);
          this.trees.push(tree);
        }
      }
      this.generatedTrees = true;
    }
  }, {
    key: 'drawTrees',
    value: function drawTrees(ctx) {
      var _this3 = this;

      debugger;
      this.trees.forEach(function (tree) {
        tree.draw(_this3._ctx);
      });
    }
  }]);

  return Game;
}();

var pic1 = "images/PC Computer - Planet Centauri - Shiba_full.png";
var pic2 = "images/Hexen-Spirit.png";
var pic3 = "images/Mount_Fuji_from_mount_tanjo crop.jpg";
var pic4 = "images/download.png";
var pic5 = "images/PC Computer - Soreyuke Burunyanman Hardcore - Ghost_for_game.png";
var pic6 = "images/spirit_pixel_removed.png";
var pic7 = "images/groundfiles/Ground Tiles copy.png";
var pic8 = "images/Mount_Fuji_from_mount_tanjo crop_pixel.png";
var pic9 = "images/cherry_blossems_sprites.png";
var pic10 = "images/kisspng-sprite-desktop-wallpaper-fruit-tree-fir-tree-5ace4a93d182a1.6415131015234689478582.png";
var pic11 = "images/fuji.gif";
var pic12 = "images/Hexen-Spirit copy_white.png";

function createImages(pic1, pic2, pic3) {
  var dogImage = new Image();
  dogImage.src = pic1;
  dogImage.onload = function () {
    var enemyImage = new Image();
    enemyImage.src = pic2;
    enemyImage.onload = function () {
      var spiritImage = new Image();
      spiritImage.src = pic6;
      spiritImage.onload = function () {
        var mountFuji = new Image();
        mountFuji.src = pic11;
        mountFuji.onload = function () {
          var cherryBlossems = new Image();
          cherryBlossems.src = pic9;
          cherryBlossems.onload = function () {
            var groundImage = new Image();
            groundImage.src = pic7;
            groundImage.onload = function () {
              var treeImage = new Image();
              treeImage.src = pic10;
              treeImage.onload = function () {
                var game = new Game(document.getElementById('canvas'), 900, 500, mountFuji, dogImage, enemyImage, spiritImage, groundImage, cherryBlossems, treeImage);
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

/***/ }),

/***/ "./canvas-elements/ground.js":
/*!***********************************!*\
  !*** ./canvas-elements/ground.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ground = function () {
  function Ground(image) {
    _classCallCheck(this, Ground);

    this.image = image;
  }

  _createClass(Ground, [{
    key: "draw",
    value: function draw(_ctx) {
      this._ctx.drawImage(this.groundImage, 0, 395, 52, 110);
      this._ctx.drawImage(this.groundImage, 52, 395, 52, 110);
      this._ctx.drawImage(this.groundImage, 104, 395, 52, 110);
      this._ctx.drawImage(this.groundImage, 156, 395, 52, 110);
      this._ctx.drawImage(this.groundImage, 208, 395, 52, 110);
      this._ctx.drawImage(this.groundImage, 260, 395, 52, 110);
      this._ctx.drawImage(this.groundImage, 312, 395, 52, 110);
      this._ctx.drawImage(this.groundImage, 364, 395, 52, 110);
      this._ctx.drawImage(this.groundImage, 406, 395, 52, 110);
      this._ctx.drawImage(this.groundImage, 458, 395, 52, 110);
      this._ctx.drawImage(this.groundImage, 510, 395, 52, 110);
      this._ctx.drawImage(this.groundImage, 562, 395, 52, 110);
      this._ctx.drawImage(this.groundImage, 604, 395, 52, 110);
      this._ctx.drawImage(this.groundImage, 656, 395, 52, 110);
      this._ctx.drawImage(this.groundImage, 708, 395, 52, 110);
      this._ctx.drawImage(this.groundImage, 760, 395, 52, 110);
      this._ctx.drawImage(this.groundImage, 810, 395, 52, 110);
    }
  }]);

  return Ground;
}();

module.exports = Ground;

/***/ }),

/***/ "./canvas-elements/leaf.js":
/*!*********************************!*\
  !*** ./canvas-elements/leaf.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Leaf = function () {
  function Leaf(image, iteration, x, speed) {
    _classCallCheck(this, Leaf);

    this.image = image;
    this.xPos = iteration * x;
    this.yPos = -50;
    this.dx = speed;
    this.dy = speed;
    this.movementRate = speed;
    this.index = 0;
    this.subIndex = 0;
    this.count = 0;
    this.xStart = iteration * x;
    // this.yStart = 0;
  }

  _createClass(Leaf, [{
    key: "pos",
    value: function pos() {
      return [this.xPos, this.yPos];
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      // let dx = 0;
      // let dy = 395;
      ctx.drawImage(this.image, this.index * 17, 0, 16, 18, this.xPos, this.yPos, 45, 45);
      this.yPos += this.dy;
      this.xPos -= this.dx;

      this.subIndex += this.movementRate;
      if (this.subIndex >= 10) {
        this.index = (this.index + 1) % 2;
        this.subIndex = 0;
      }
      this.count += 1;
      if (this.count === 1000) {
        this.movementRate += .5;
        this.count = 1;
      }

      if (this.yPos > 400 || this.xPos > 800) {
        this.xPos = this.xStart;
        this.yPos = 0;
      }
    }
  }]);

  return Leaf;
}();

module.exports = Leaf;

/***/ }),

/***/ "./canvas-elements/score.js":
/*!**********************************!*\
  !*** ./canvas-elements/score.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Score = function () {
  function Score(startScore, topFive) {
    _classCallCheck(this, Score);

    this.currentScore = startScore;
    this.top = topFive;
    this.username = [];
  }

  _createClass(Score, [{
    key: "updateScore",
    value: function updateScore(newScore) {
      this.currentScore = this.currentScore + newScore;
    }
  }, {
    key: "resetScore",
    value: function resetScore() {
      this.currentScore = 0;
    }
  }, {
    key: "score",
    value: function score() {
      return this.currentScore;
    }
  }, {
    key: "drawScore",
    value: function drawScore(_ctx) {
      _ctx.font = "16px Arial";
      _ctx.fillStyle = "rgba(0, 0, 0, 1)";
      _ctx.fillText("Score: " + this.currentScore, 8, 20);
    }
  }, {
    key: "topFive",
    value: function topFive(newScore) {
      // debugger
      var added = false;
      if (!this.top.length) {
        return this.top = [newScore];
      }
      var newTop = this.top;
      for (var i = 0; i < this.top.length; i++) {
        if (this.top[i] <= newScore) {
          newTop = [].concat(_toConsumableArray(this.top.slice(0, i)), [newScore], _toConsumableArray(this.top.slice(i)));
          this.top = newTop;
          added = true;
          break;
        }
      }
      if (!added) {
        newTop = [].concat(_toConsumableArray(this.top), [newScore]);
      }
      while (newTop.length > 5) {
        newTop.pop();
      }
      this.top = newTop;
    }
  }, {
    key: "postScore",
    value: function postScore() {
      for (var i = 0; i < this.top.length; i++) {
        var li = document.createElement('li');
        li.className += '' + 'control-instruction-styling';
        li.setAttribute("id", "score " + i);
        li.innerHTML = this.top[i];
        document.getElementById("score " + i).replaceWith(li);
      }
    }
  }, {
    key: "username",
    value: function username() {
      document.addEventListener('keydown', this.usernameHandler);
    }
  }, {
    key: "usernameHandler",
    value: function usernameHandler(e) {
      switch (e.keycode) {
        case 81:
          this.username.push('q');
          break;
        case 87:
          this.username.push('w');
          break;
        case 69:
          this.username.push('e');
          break;
        case 82:
          this.username.push('r');
          break;
        case 84:
          this.username.push('t');
          break;
        case 89:
          this.username.push('y');
          break;
        case 85:
          this.username.push('u');
          break;
        case 73:
          this.username.push('i');
          break;
        case 79:
          this.username.push('o');
          break;
        case 80:
          this.username.push('p');
          break;
        case 65:
          this.username.push('a');
          break;
        case 83:
          this.username.push('s');
          break;
        case 68:
          this.username.push('d');
          break;
        case 70:
          this.username.push('f');
          break;
        case 71:
          this.username.push('g');
          break;
        case 72:
          this.username.push('h');
          break;
        case 74:
          this.username.push('j');
          break;
        case 75:
          this.username.push('k');
          break;
        case 76:
          this.username.push('l');
          break;
        case 90:
          this.username.push('z');
          break;
        case 88:
          this.username.push('x');
          break;
        case 67:
          this.username.push('c');
          break;
        case 86:
          this.username.push('v');
          break;
        case 66:
          this.username.push('b');
          break;
        case 78:
          this.username.push('n');
          break;
        case 77:
          this.username.push('m');
          break;
        case 8:
          this.username.pop();
          break;
        case 13:
          if (this.username.length === 3) {
            this.topFive();
          }
          break;
        default:

      }
    }
  }]);

  return Score;
}();

module.exports = Score;

/***/ }),

/***/ "./canvas-elements/spirit.js":
/*!***********************************!*\
  !*** ./canvas-elements/spirit.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Spirit = function () {
  function Spirit(image, speed, height) {
    _classCallCheck(this, Spirit);

    this.image = image;
    this.x = 1000;
    this.y = height;
    this.dx = .05;
    this.speed = speed;
    this.index = 0;
    this.subIndex = 0;
  }

  _createClass(Spirit, [{
    key: "spiritPos",
    value: function spiritPos() {
      return [this.x, this.y];
    }
  }, {
    key: "draw",
    value: function draw(_ctx) {
      _ctx.drawImage(this.image, this.index * 650, 1266, 660, 619, this.x, this.y, 65, 60);
      if (this.x >= 0 - 95) {
        this.x -= this.speed;
      }
      this.subIndex += 1;
      if (this.subIndex >= 10) {
        this.index = (this.index + 1) % 3;
        this.subIndex = 0;
      }
    }
  }, {
    key: "collision",
    value: function collision(spirit, dog) {
      if (spirit.spiritPos()[0] > 0 && spirit.spiritPos()[0] < 135 && dog.dogPosition()[1] >= 325 && spirit.spiritPos()[1] === 335) {
        return true;
      } else if (spirit.spiritPos()[0] > 0 && spirit.spiritPos()[0] < 125 && dog.dogPosition()[1] <= 300 && spirit.spiritPos()[1] === 275) {
        return true;
      } else {
        return false;
      }
    }
  }]);

  return Spirit;
}();

module.exports = Spirit;

/***/ }),

/***/ "./canvas-elements/tree.js":
/*!*********************************!*\
  !*** ./canvas-elements/tree.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tree = function () {
  function Tree(image, x, speed) {
    _classCallCheck(this, Tree);

    this.xPos = x;
    this.treeImage = image;
    this.dx = speed;
    this.index = 0;
    this.subIndex = 0;
    this.count = 0;
    this.movementRate = speed;
    this.treeFull = false;
    this.treeReverse = false;
  }

  // this._ctx.drawImage(this.treeImage, 0, 747, 275, 350, 500, 220, 380, 270);
  // this._ctx.drawImage(this.treeImage, 0, 747, 275, 350, 0, 220, 380, 270);


  _createClass(Tree, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.drawImage(this.treeImage, this.index * 270, 747, 275, 350, this.xPos, 220, 200, 270);
      this.xPos -= this.dx;

      this.subIndex += this.movementRate;
      if (this.subIndex >= 1000 && !this.treeFull) {
        this.index = (this.index + 1) % 15;
        if (this.index * 270 === 3780) {
          this.treeFull = true;
          this.treeReverse = true;
        }
        this.subIndex = 0;
      }

      if (this.treeFull) {
        if (this.treeReverse) {
          this.index - 1;
          if (this.index === 11) {
            this.treeReverse = false;
          } else {
            this.index + 1;
            if (this.index === 14) {
              this.treeReverse = true;
            }
          }
        }
      }

      this.count += 1;
      if (this.count === 1000) {
        this.movementRate += 1;
        this.dx += this.movementRate / 2;
        this.count = 1;
      }

      if (this.xPos < 0 - 390) {
        this.xPos = 1200;
      }
    }
  }]);

  return Tree;
}();

module.exports = Tree;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map