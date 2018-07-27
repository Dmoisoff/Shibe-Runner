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

/***/ "./canvas-elements/Spirit.js":
/*!***********************************!*\
  !*** ./canvas-elements/Spirit.js ***!
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

/***/ }),

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
  function Dog(canvas, width, height, image) {
    _classCallCheck(this, Dog);

    this._ctx = canvas.getContext('2d');
    this._width = width;
    this._height = height;
    this.xPos = 75;
    this.yPos = 335;
    this.ballRadius = 10;
    this.jump = false;
    this.KeyDownHandler = this.KeyDownHandler.bind(this);
    this.KeyUpHandler = this.KeyUpHandler.bind(this);
    this.arcUp = this.arcUp.bind(this);
    this.arcDown = this.arcDown.bind(this);
    this.pexelDog = image;
    this.index = 0;
    this.subIndex = 0;
    document.addEventListener('keydown', this.KeyDownHandler, false);
    document.addEventListener('keyup', this.KeyUpHandler, false);
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
        return 0.05;
      } else if (value < 300) {
        return 0.3;
      } else {
        return 0.5;
      }
    }
  }, {
    key: 'arcDown',
    value: function arcDown(value) {
      if (value < 300) {
        return 0.05;
      } else if (value < 325) {
        return 0.3;
      } else {
        return 0.5;
      }
    }
  }, {
    key: 'draw',
    value: function draw() {
      // this._ctx.drawImage(this.pexelDog, this.index*36, 0, 37,24, this.xPos, this.yPos, 80, 55);
      this._ctx.drawImage(this.pexelDog, this.index * 36.6, 264, 37.6, 23.4, this.xPos, this.yPos, 85, 65);
      if (this.jump && this.yPos > 235) {
        this.yPos -= this.arcUp(this.yPos);
        if (Math.floor(this.yPos) === 235) {
          this.jump = false;
          this.inAir = true;
        }
      }
      if (this.inAir) {
        this.yPos += this.arcDown(this.yPos);
        if (this.yPos >= 335) {
          this.inAir = false;
        }
      }
      this.subIndex += 1;
      if (this.subIndex === 600) {
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
  function Enemy(canvas, width, height, image) {
    _classCallCheck(this, Enemy);

    this._ctx = canvas.getContext('2d');
    this._width = width;
    this._height = height;
    this.x = 780;
    this.y = 335;
    this.dx = .09;
    this.ballRadius = 10;
    this.image = image;
  }

  _createClass(Enemy, [{
    key: 'enemyPos',
    value: function enemyPos() {
      return [this.x, this.y];
    }
  }, {
    key: 'draw',
    value: function draw() {
      this._ctx.drawImage(this.image, this.x, this.y, 95, 65);
      if (this.x >= 0 - 95) {
        this.x -= .09;
      }
      if (this.x <= 0 - 95) {
        this.x = 810;
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
var Spirit = __webpack_require__(/*! ./Spirit */ "./canvas-elements/Spirit.js");

var Game = function () {
  function Game(canvas, width, height, image) {
    _classCallCheck(this, Game);

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

  _createClass(Game, [{
    key: 'play',
    value: function play() {
      var _this = this;

      this._clear;
      var img = new Image();
      img.src = "images/Mount_Fuji_from_mount_tanjo crop.jpg";
      img.onload = function () {
        return _this._ctx.drawImage(img, 0, 0, 800, 400);
      };
      this._floor();
      if (enemy.enemyPos()[0] > 0 && enemy.enemyPos()[0] < 125 && dog.dogPosition()[1] >= 335) {
        window.alert('game over');
        document.location.reload();
      } else {
        setInterval(enemy.draw.bind(enemy), 10);
        // setInterval(spirit.draw.bind(spirit),10);
        setInterval(dog.draw.bind(dog), 10);
        // setInterval(trees.draw.bind(trees),10);
        // setInterval(enemy2.draw.bind(enemy2),1);
        dog.dogPosition();
        requestAnimationFrame(this.play.bind(this));
      }
    }
  }, {
    key: '_clear',
    value: function _clear() {
      this._ctx.clearRect(0, 0, this._width, this._height);
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
    key: '_reset',
    value: function _reset() {
      enemy.enemyReset();
    }
  }]);

  return Game;
}();

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


function drawDog() {
  var img = new Image();
  img.src = "images/shibe_1.png";
  return img;
}
function drawDog1() {
  var img = new Image();
  img.src = "images/shibe.png";
  return img;
}
function drawDogs() {
  var img = new Image();
  img.src = "images/PC Computer - Planet Centauri - Shiba_full.png";
  return img;
}

function drawEnemy() {
  var img = new Image();
  img.src = "images/Hexen-Spirit.png";
  return img;
}

function drawBackground() {
  var img = new Image();
  img.src = "images/Mount_Fuji_from_mount_tanjo crop.jpg";
  return img;
}

function drawTrees() {
  var img = new Image();
  img.src = "images/kisspng-sprite-desktop-wallpaper-fruit-tree-fir-tree-5ace4a93d182a1.6415131015234689478582.png";
  return img;
}

var Trees = function () {
  function Trees(canvas, image) {
    _classCallCheck(this, Trees);

    this._ctx = canvas.getContext('2d');
    this.trees = image;
  }

  _createClass(Trees, [{
    key: 'draw',
    value: function draw() {
      this._ctx.drawImage(this.trees, 0, 747, 275, 350, 0, 185, 450, 340);
    }
  }]);

  return Trees;
}();

var game = new Game(document.getElementsByTagName('canvas')[0], 800, 500, drawBackground());
var enemy = new Enemy(document.getElementsByTagName('canvas')[0], 800, 500, drawEnemy());
var enemy2 = new Enemy(document.getElementsByTagName('canvas')[0], 800, 500);
var spirit = new Spirit(document.getElementsByTagName('canvas')[0], 800, 500);
var dog = new Dog(document.getElementsByTagName('canvas')[0], 800, 500, drawDogs());
var trees = new Trees(document.getElementsByTagName('canvas')[0], drawTrees());
game.play();

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map