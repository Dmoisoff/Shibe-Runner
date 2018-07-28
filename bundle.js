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
    this.yPos = 335;
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
        return 3;
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
        return 5;
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
        if (this.yPos >= 335) {
          this.inAir = false;
        }
      }
      this.subIndex += 1;
      if (this.subIndex === 10) {
        this.index = (this.index + 1) % 5;
        this.subIndex = 0;
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

    this.x = 780;
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
      // if(this.x <= 0-95){
      //   this.x = 810;
      // }
    }
  }, {
    key: "collision",
    value: function collision(enemy, dog) {
      if (enemy.enemyPos()[0] > 0 && enemy.enemyPos()[0] < 125 && dog.dogPosition()[1] >= 335 && enemy.enemyPos()[1] === 335) {
        debugger;
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
var Score = __webpack_require__(/*! ./score */ "./canvas-elements/score.js");

var Game = function () {
  function Game(canvas, width, height, mountFuji, dogImage, enemyImage) {
    _classCallCheck(this, Game);

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

  _createClass(Game, [{
    key: 'enemyGenerator',
    value: function enemyGenerator(enemySpeed, height) {
      var enemy = new Enemy(this.enemyImage, enemySpeed, height);
      return enemy;
    }
  }, {
    key: 'play',
    value: function play(enemy) {
      var _this = this;

      if (!this.playGame && this.currentScore === 1) {
        this._floor();
        this.generateBackground(this.image);
        this.startGame();
        requestAnimationFrame(function () {
          _this.play;
        });
      } else if (!this.playGame) {
        debugger;
        enemy.draw(this._ctx);
        enemy = this.removeEnemy(enemy);
        this.dog.draw(this._ctx);
        this.restartGame();
        // requestAnimationFrame(() => {this.play;});
      } else {
        this._ctx.clearRect(0, 0, 800, 500);
        this._floor();
        this.generateBackground(this.image);
        if (enemy) {
          if (enemy.collision(enemy, this.dog)) {
            this.restartGame();
            enemy.draw(this._ctx);
            this.dog.draw(this._ctx);
            this.drawScore(this._ctx);
            requestAnimationFrame(function () {
              _this.play(enemy);
            });
          } else {
            this.currentScore += 1;
            enemy.draw(this._ctx);
            enemy = this.removeEnemy(enemy);
            this.dog.draw(this._ctx);
            this.drawScore(this._ctx);
            requestAnimationFrame(function () {
              _this.play(enemy);
            });
          }
        } else {
          if (this.currentScore % 500 > 200) {
            this.enemySpeed += 1;
          }
          if (this.currentScore % 600 > 400) {
            // debugger
            this.enemyheight = 275;
          } else {
            this.enemyheight = 335;
          }
          enemy = this.enemyGenerator(this.enemySpeed, this.enemyheight);
          this.dog.draw(this._ctx);
          this.drawScore(this._ctx);
          requestAnimationFrame(function () {
            _this.play(enemy);
          });
        }
      }
    }
  }, {
    key: 'generateBackground',
    value: function generateBackground(img) {
      return this._ctx.drawImage(img, 0, 0, 800, 400);
    }
  }, {
    key: 'drawScore',
    value: function drawScore(_ctx) {
      _ctx.font = "16px Arial";
      _ctx.fillStyle = "#0095DD";
      _ctx.fillText('Score: ' + this.currentScore, 8, 20);
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
      this._ctx.fillStyle = 'rgba(146,98,57,1)';
      this._ctx.fillRect(0, 400, 1000, 100);
    }
  }, {
    key: 'startGame',
    value: function startGame() {
      document.addEventListener('keydown', this.KeyDownHandler, false);
      this._ctx.fillStyle = 'rgba(128,128,128,.7)';
      this._ctx.fillRect(150, 75, 500, 300);
      this._ctx.font = "32px Arial";
      this._ctx.fillStyle = "rgba(255,183,197,1)";
      this._ctx.fillText('Press Enter', 320, 115);
      this._ctx.fillText('to start the game.', 280, 155);
    }
  }, {
    key: 'restartGame',
    value: function restartGame() {
      this._ctx.fillStyle = 'rgba(128,128,128,.7)';
      this._ctx.fillRect(150, 75, 500, 300);
      this._ctx.font = "32px Arial";
      this._ctx.fillStyle = "rgba(255,183,197,1)";
      this._ctx.fillText('Press Enter', 320, 115);
      this._ctx.fillText('to restart the game.', 280, 155);
      this._ctx.fillText('Your score was', 280, 205);
      this._ctx.fillText('' + this.currentScore, 360, 245);
      this.playGame = false;
    }
  }, {
    key: 'KeyDownHandler',
    value: function KeyDownHandler(e) {
      if (!this.playGame) {
        if (e.keyCode === 13) {
          this.playGame = true;
          this.currentScore = 1;
          this.enemySpeed = 4;
          this.play();
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
  }]);

  return Game;
}();

var pic1 = "images/PC Computer - Planet Centauri - Shiba_full.png";
var pic2 = "images/Hexen-Spirit.png";
var pic3 = "images/Mount_Fuji_from_mount_tanjo crop.jpg";
var pic4 = "images/download.png";

function createImages(pic1, pic2, pic3) {
  var dogImage = new Image();
  dogImage.src = pic1;
  dogImage.onload = function () {
    var enemyImage = new Image();
    enemyImage.src = pic2;
    enemyImage.onload = function () {
      var mountFuji = new Image();
      mountFuji.src = pic4;
      mountFuji.onload = function () {
        debugger;
        // const enemy = new Enemy(document.getElementById('canvas'),800,500,enemyImage);
        // const dog = new Dog(document.getElementById('canvas'),800,500,dogImage);
        var game = new Game(document.getElementById('canvas'), 800, 500, mountFuji, dogImage, enemyImage);
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

/***/ }),

/***/ "./canvas-elements/score.js":
/*!**********************************!*\
  !*** ./canvas-elements/score.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Score = function () {
  function Score(startScore) {
    _classCallCheck(this, Score);

    this.currentScore = startScore;
  }

  _createClass(Score, [{
    key: "drawScore",
    value: function drawScore(_ctx, currentScore) {
      _ctx.font = "16px Arial";
      _ctx.fillStyle = "#0095DD";
      _ctx.fillText("Score: " + currentScore, 8, 20);
    }
  }, {
    key: "score",
    value: function score() {
      this.currentScore;
    }
  }]);

  return Score;
}();

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
  function Spirit(canvas, width, height) {
    _classCallCheck(this, Spirit);

    this._ctx = canvas.getContext('2d');
    this._width = width;
    this._height = height;
    this.x = 789;
    this.y = 325;
    this.dx = .05;
  }

  _createClass(Spirit, [{
    key: 'draw',
    value: function draw() {
      this.makeBall();
      if (this.x + this.dx > this._width - this.ballRadius) {
        this.dx = -this.dx;
      }
      if (this.x - this.dx < 0) {
        this.x = 789;
      }
      this.x += this.dx;
    }
  }]);

  return Spirit;
}();

module.exports = Spirit;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map