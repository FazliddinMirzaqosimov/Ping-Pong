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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/ball.js":
/*!************************!*\
  !*** ./src/js/ball.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ "./src/js/canvas.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./src/js/data.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");




function Ball(x, y, radius, color) {
  var velocity = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
    x: Math.random() < 0.5 ? _data__WEBPACK_IMPORTED_MODULE_1__["gamer"].speed.x + Math.random() : -_data__WEBPACK_IMPORTED_MODULE_1__["gamer"].speed.x - Math.random(),
    y: Math.random() * 4 - 2
  };
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  this.velocity = JSON.parse(JSON.stringify(velocity));

  this.update = function () {
    var _this = this;

    this.velocity.x *= 1.0002;

    if (this.x > _data__WEBPACK_IMPORTED_MODULE_1__["canvas"].width || this.x < 0) {
      _canvas__WEBPACK_IMPORTED_MODULE_0__["default"].roundOver(this.x < 0 ? _data__WEBPACK_IMPORTED_MODULE_1__["gamer2"] : _data__WEBPACK_IMPORTED_MODULE_1__["gamer1"]);
      this.x = x;
      this.y = y;
      this.velocity = {
        x: 0,
        y: 0
      };
      setTimeout(function () {
        _this.velocity = JSON.parse(JSON.stringify(velocity));
      }, 2000);
      return;
    }

    if (this.y + this.radius + this.velocity.y > _data__WEBPACK_IMPORTED_MODULE_1__["canvas"].height || this.y + this.velocity.y - this.radius < 0) {
      this.velocity.y = -this.velocity.y;
    }

    if (this.x + this.velocity.x - this.radius < _data__WEBPACK_IMPORTED_MODULE_1__["gamer1"].x + _data__WEBPACK_IMPORTED_MODULE_1__["gamer1"].velocity.x + _data__WEBPACK_IMPORTED_MODULE_1__["gamer1"].width && _data__WEBPACK_IMPORTED_MODULE_1__["gamer1"].x + _data__WEBPACK_IMPORTED_MODULE_1__["gamer1"].velocity.x + _data__WEBPACK_IMPORTED_MODULE_1__["gamer1"].width - (this.x + this.velocity.x - this.radius) < -this.velocity.x + _data__WEBPACK_IMPORTED_MODULE_1__["gamer1"].velocity.x && this.y + this.velocity.y > _data__WEBPACK_IMPORTED_MODULE_1__["gamer1"].y + _data__WEBPACK_IMPORTED_MODULE_1__["gamer1"].velocity.y && this.y + this.velocity.y < _data__WEBPACK_IMPORTED_MODULE_1__["gamer1"].y + _data__WEBPACK_IMPORTED_MODULE_1__["gamer1"].height + _data__WEBPACK_IMPORTED_MODULE_1__["gamer1"].velocity.y) {
      this.velocity.x = Math.abs(this.velocity.x);
    } else if (this.x + this.radius > _data__WEBPACK_IMPORTED_MODULE_1__["gamer2"].x + _data__WEBPACK_IMPORTED_MODULE_1__["gamer2"].velocity.x && this.x < _data__WEBPACK_IMPORTED_MODULE_1__["gamer2"].x + _data__WEBPACK_IMPORTED_MODULE_1__["gamer2"].velocity.x && this.y > _data__WEBPACK_IMPORTED_MODULE_1__["gamer2"].y && this.y < _data__WEBPACK_IMPORTED_MODULE_1__["gamer2"].y + _data__WEBPACK_IMPORTED_MODULE_1__["gamer2"].height) {
      this.velocity.x = -Math.abs(this.velocity.x);
    }

    this.x += this.velocity.x;
    this.y += this.velocity.y;
    this.draw();
  };

  this.draw = function () {
    _data__WEBPACK_IMPORTED_MODULE_1__["c"].beginPath();
    _data__WEBPACK_IMPORTED_MODULE_1__["c"].arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    _data__WEBPACK_IMPORTED_MODULE_1__["c"].fillStyle = this.color;
    _data__WEBPACK_IMPORTED_MODULE_1__["c"].fill();
    _data__WEBPACK_IMPORTED_MODULE_1__["c"].closePath();
  };
}

var ball = new Ball(_data__WEBPACK_IMPORTED_MODULE_1__["canvas"].width / 2, _data__WEBPACK_IMPORTED_MODULE_1__["canvas"].height / 2, 10, "white");
/* harmony default export */ __webpack_exports__["default"] = (ball);

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/js/game.js");

var game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"]();
game.start();
/* harmony default export */ __webpack_exports__["default"] = (game);

/***/ }),

/***/ "./src/js/data.js":
/*!************************!*\
  !*** ./src/js/data.js ***!
  \************************/
/*! exports provided: mouse, keyboards, gamer, canvas, c, gamer1, gamer2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouse", function() { return mouse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyboards", function() { return keyboards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gamer", function() { return gamer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvas", function() { return canvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gamer1", function() { return gamer1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gamer2", function() { return gamer2; });
/* harmony import */ var _gamer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gamer */ "./src/js/gamer.js");

var mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
};
var keyboards = new Set();
var gamer = {
  height: 150,
  width: 10,
  speed: {
    x: 2,
    y: 3
  }
};
var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");
canvas.width = 900;
canvas.height = 500;
var gamer1 = new _gamer__WEBPACK_IMPORTED_MODULE_0__["default"]("gamer1", 0, 0, gamer.width, gamer.height);
var gamer2 = new _gamer__WEBPACK_IMPORTED_MODULE_0__["default"]("gamer2", canvas.width - gamer.width, 0, gamer.width, gamer.height); // Event Listeners

addEventListener("mousemove", function (event) {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
}); // Event Listeners

addEventListener("keypress", function (event) {
  keyboards.add(event.code);
}); // Event Listeners

addEventListener("keyup", function (event) {
  keyboards["delete"](event.code);
});

/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ball */ "./src/js/ball.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./src/js/data.js");


function Game() {
  var _this = this;

  this.start = function () {
    requestAnimationFrame(_this.start);
    _data__WEBPACK_IMPORTED_MODULE_1__["c"].clearRect(0, 0, _data__WEBPACK_IMPORTED_MODULE_1__["canvas"].width, _data__WEBPACK_IMPORTED_MODULE_1__["canvas"].height); // Move gamer1 in y directions

    if (_data__WEBPACK_IMPORTED_MODULE_1__["keyboards"].has("KeyW")) {
      _data__WEBPACK_IMPORTED_MODULE_1__["gamer1"].velocity.y = -_data__WEBPACK_IMPORTED_MODULE_1__["gamer"].speed.y;
    } else if (_data__WEBPACK_IMPORTED_MODULE_1__["keyboards"].has("KeyS")) {
      _data__WEBPACK_IMPORTED_MODULE_1__["gamer1"].velocity.y = _data__WEBPACK_IMPORTED_MODULE_1__["gamer"].speed.y;
    } else {
      _data__WEBPACK_IMPORTED_MODULE_1__["gamer1"].velocity.y = 0;
    } // Move gamer1 in x directions


    if (_data__WEBPACK_IMPORTED_MODULE_1__["keyboards"].has("KeyA")) {
      _data__WEBPACK_IMPORTED_MODULE_1__["gamer1"].velocity.x = -_data__WEBPACK_IMPORTED_MODULE_1__["gamer"].speed.x;
    } else if (_data__WEBPACK_IMPORTED_MODULE_1__["keyboards"].has("KeyD")) {
      _data__WEBPACK_IMPORTED_MODULE_1__["gamer1"].velocity.x = _data__WEBPACK_IMPORTED_MODULE_1__["gamer"].speed.x;
    } else {
      _data__WEBPACK_IMPORTED_MODULE_1__["gamer1"].velocity.x = 0;
    } // Move gamer2 in y directions


    if (_data__WEBPACK_IMPORTED_MODULE_1__["keyboards"].has("KeyI")) {
      _data__WEBPACK_IMPORTED_MODULE_1__["gamer2"].velocity.y = -_data__WEBPACK_IMPORTED_MODULE_1__["gamer"].speed.y;
    } else if (_data__WEBPACK_IMPORTED_MODULE_1__["keyboards"].has("KeyK")) {
      _data__WEBPACK_IMPORTED_MODULE_1__["gamer2"].velocity.y = _data__WEBPACK_IMPORTED_MODULE_1__["gamer"].speed.y;
    } else {
      _data__WEBPACK_IMPORTED_MODULE_1__["gamer2"].velocity.y = 0;
    } // Move gamer2 in x directions


    if (_data__WEBPACK_IMPORTED_MODULE_1__["keyboards"].has("KeyJ")) {
      _data__WEBPACK_IMPORTED_MODULE_1__["gamer2"].velocity.x = -_data__WEBPACK_IMPORTED_MODULE_1__["gamer"].speed.x;
    } else if (_data__WEBPACK_IMPORTED_MODULE_1__["keyboards"].has("KeyL")) {
      _data__WEBPACK_IMPORTED_MODULE_1__["gamer2"].velocity.x = _data__WEBPACK_IMPORTED_MODULE_1__["gamer"].speed.x;
    } else {
      _data__WEBPACK_IMPORTED_MODULE_1__["gamer2"].velocity.x = 0;
    }

    _data__WEBPACK_IMPORTED_MODULE_1__["gamer1"].update();
    _data__WEBPACK_IMPORTED_MODULE_1__["gamer2"].update();
    _ball__WEBPACK_IMPORTED_MODULE_0__["default"].update();
  };

  this.roundOver = function (winner) {
    winner.point++;
    var winnerEl = document.getElementById(winner.name);
    winnerEl.textContent = winner.point;
  };
}

/***/ }),

/***/ "./src/js/gamer.js":
/*!*************************!*\
  !*** ./src/js/gamer.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/js/data.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Gamer = /*#__PURE__*/function () {
  function Gamer(name, x, y) {
    var width = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 30;
    var height = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 200;
    var color = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "white";

    _classCallCheck(this, Gamer);

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.velocity = {
      x: 0,
      y: 0
    };
    this.point = 0;
    this.name = name;
  }

  _createClass(Gamer, [{
    key: "update",
    value: function update() {
      if (this.x + this.width + this.velocity.x < _data__WEBPACK_IMPORTED_MODULE_0__["canvas"].width / 3 && this.velocity.x + this.x > 0 || this.x + this.width + this.velocity.x < _data__WEBPACK_IMPORTED_MODULE_0__["canvas"].width && this.velocity.x + this.x > _data__WEBPACK_IMPORTED_MODULE_0__["canvas"].width / 3 * 2) {
        this.x += this.velocity.x;
      }

      if (this.y + this.velocity.y + this.height < _data__WEBPACK_IMPORTED_MODULE_0__["canvas"].height && this.y + this.velocity.y > 0) {
        console.log(1);
        this.y += this.velocity.y;
      }

      this.draw();
    }
  }, {
    key: "draw",
    value: function draw() {
      _data__WEBPACK_IMPORTED_MODULE_0__["c"].beginPath();
      _data__WEBPACK_IMPORTED_MODULE_0__["c"].fillRect(this.x, this.y, this.width, this.height);
      _data__WEBPACK_IMPORTED_MODULE_0__["c"].fillStyle = this.color;
      _data__WEBPACK_IMPORTED_MODULE_0__["c"].fill();
      _data__WEBPACK_IMPORTED_MODULE_0__["c"].closePath();
    }
  }]);

  return Gamer;
}();

/* harmony default export */ __webpack_exports__["default"] = (Gamer);

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! exports provided: randomIntFromRange, randomColor, distance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomIntFromRange", function() { return randomIntFromRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomColor", function() { return randomColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

function distance(x1, y1, x2, y2) {
  var xDist = x2 - x1;
  var yDist = y2 - y1;
  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}



/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map