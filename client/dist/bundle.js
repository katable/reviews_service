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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/angelazhou/Desktop/katablev4/reviews_service/node_modules/react/index.js'");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(33);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(35)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2!./style.css", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js??ref--2!./style.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Star_jsx__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_css__);




var createStars = function createStars(numStars) {
  var uncoloredStars = 5 - numStars;
  var stars = [];

  for (var i = 0; i < numStars; i++) {
    stars.push(__WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_1__Star_jsx__["a" /* default */], {
      colored: true
    }));
  }

  for (var _i = 0; _i < uncoloredStars; _i++) {
    stars.push(__WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_1__Star_jsx__["a" /* default */], {
      colored: false
    }));
  }

  return stars;
};

var Stars = function Stars(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_2__style_css___default.a.starsComponent
  }, createStars(props.starRating));
};

/* harmony default export */ __webpack_exports__["a"] = (Stars);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_App_jsx__ = __webpack_require__(29);



__WEBPACK_IMPORTED_MODULE_1_react_dom__["default"].render(__WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_2__components_App_jsx__["a" /* default */], null), document.getElementById('app'));

/***/ }),
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/angelazhou/Desktop/katablev4/reviews_service/node_modules/react-dom/index.js'");

/***/ }),
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Reviews_jsx__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NoReviews_jsx__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Header_jsx__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SelectMenu_jsx__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__SearchBar_jsx__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__style_css__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));
    _this.state = {
      reviews: [],
      selectMenu: {
        value: 'newest'
      },
      query: ''
    };
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchReviews();
    }
  }, {
    key: "fetchReviews",
    value: function fetchReviews() {
      var _this2 = this;

      fetch('/restaurant/2/reviews').then(function (reviews) {
        return reviews.json();
      }).then(function (reviewsJSON) {
        _this2.setState({
          reviews: reviewsJSON
        });
      }).catch(function () {
        console.log("Error: Reviews not found.");
      });
    }
  }, {
    key: "renderReviews",
    value: function renderReviews() {
      var reviews = this.state.reviews;

      if (this.state.query) {
        reviews = this.filterForSearchedResults(reviews, this.state.query);
      }

      switch (this.state.selectMenu.value) {
        case 'newest':
          reviews = this.filterDataNewestHelperFunction(reviews);
          break;

        case 'oldest':
          reviews = this.filterDataOldestHelperFunction(reviews);
          break;

        case 'highest-rating':
          reviews = this.sortHighestRatingsFirst(reviews);
          break;

        case 'lowest-rating':
          reviews = this.sortLowestRatingsFirst(reviews);
          break;

        default:
          reviews = reviews;
      }

      return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_1__Reviews_jsx__["a" /* default */], {
        reviews: reviews
      });
    }
  }, {
    key: "renderNoReviews",
    value: function renderNoReviews() {
      return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_2__NoReviews_jsx__["a" /* default */], {
        restaurantName: this.state.reviews
      });
    }
  }, {
    key: "renderFilteredData",
    value: function renderFilteredData(event) {
      event.preventDefault();
      this.setState({
        selectMenu: {
          value: event.target.value
        }
      });
    }
  }, {
    key: "onInputSearch",
    value: function onInputSearch(event) {
      event.preventDefault();
      var query = event.target.value;
      this.setState({
        query: query
      });
    }
  }, {
    key: "filterForSearchedResults",
    value: function filterForSearchedResults(list, word) {
      var lowerCaseWord = word.toLowerCase();
      return list.filter(function (review) {
        var lowerCaseReview = review.review_text.toLowerCase();

        if (lowerCaseReview.includes(lowerCaseWord)) {
          return true;
        } else {
          return false;
        }
      });
    }
  }, {
    key: "filterDataNewestHelperFunction",
    value: function filterDataNewestHelperFunction(list) {
      list.forEach(function (review) {
        review.time = new Date(review.review_time);
      });
      return list.sort(function (a, b) {
        return b.time - a.time;
      });
    }
  }, {
    key: "filterDataOldestHelperFunction",
    value: function filterDataOldestHelperFunction(list) {
      list.forEach(function (review) {
        review.time = new Date(review.review_time);
      });
      return list.sort(function (a, b) {
        return a.time - b.time;
      });
    }
  }, {
    key: "sortHighestRatingsFirst",
    value: function sortHighestRatingsFirst(list) {
      return list.sort(function (a, b) {
        return b.overall_rating - a.overall_rating;
      });
    }
  }, {
    key: "sortLowestRatingsFirst",
    value: function sortLowestRatingsFirst(list) {
      return list.sort(function (a, b) {
        return a.overall_rating - b.overall_rating;
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_3__Header_jsx__["a" /* default */], {
        reviewsCount: this.state.reviews.length,
        restaurantInfo: this.state.reviews
      })), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_6__style_css___default.a.sortingText
      }, __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_4__SelectMenu_jsx__["a" /* default */], {
        onSelectHandler: this.renderFilteredData.bind(this),
        value: this.state.selectMenu.value
      })), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_5__SearchBar_jsx__["a" /* default */], {
        onSearch: this.onInputSearch.bind(this)
      })))), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("div", null, this.state.reviews.length > 0 ? this.renderReviews() : this.renderNoReviews()));
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react__["default"].Component);

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__User_jsx__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Stars_jsx__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__style_css__);





var Reviews = function Reviews(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_3__style_css___default.a.review
  }, props.reviews.map(function (review) {
    return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("div", {
      className: __WEBPACK_IMPORTED_MODULE_3__style_css___default.a.reviewContainer
    }, __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("div", {
      className: __WEBPACK_IMPORTED_MODULE_3__style_css___default.a.userContainer
    }, __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_1__User_jsx__["a" /* default */], {
      username: review.username ? review.username : "OpenTable Diner",
      city: review.city ? review.city : "",
      state: review.state ? review.state : ""
    })), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("div", {
      className: __WEBPACK_IMPORTED_MODULE_3__style_css___default.a.reviewContentContainer,
      style: {
        flex: 4,
        marginTop: "30px",
        paddingBottom: "20px"
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("div", {
      className: __WEBPACK_IMPORTED_MODULE_3__style_css___default.a.reviewHeadingContainer
    }, __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("div", {
      className: __WEBPACK_IMPORTED_MODULE_3__style_css___default.a.starContainer
    }, __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_2__Stars_jsx__["a" /* default */], {
      starRating: review.overall_rating
    })), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("div", {
      className: __WEBPACK_IMPORTED_MODULE_3__style_css___default.a.reviewTime
    }, __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("span", null, "\xA0Dined on "), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("span", null, review.review_time.slice(0, 15))), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("div", {
      className: __WEBPACK_IMPORTED_MODULE_3__style_css___default.a.ratingsContainer
    }, __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("span", null, "\xA0Overall "), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("span", {
      className: __WEBPACK_IMPORTED_MODULE_3__style_css___default.a.rating
    }, review.overall_rating), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("span", null, " Food "), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("span", {
      className: __WEBPACK_IMPORTED_MODULE_3__style_css___default.a.rating
    }, review.food_rating), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("span", null, " Service "), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("span", {
      className: __WEBPACK_IMPORTED_MODULE_3__style_css___default.a.rating
    }, review.service_rating), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("span", null, " Ambience "), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("span", {
      className: __WEBPACK_IMPORTED_MODULE_3__style_css___default.a.rating
    }, review.ambience_rating)), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("div", {
      className: __WEBPACK_IMPORTED_MODULE_3__style_css___default.a.reviewText
    }, __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("p", null, review.review_text)))), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("div", {
      className: __WEBPACK_IMPORTED_MODULE_3__style_css___default.a.iconContainer
    }, __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("img", {
      src: "./flag.png"
    }), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("span", null, " Report "), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("img", {
      src: "./helpful.png"
    }), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("span", null, " Helpful ")), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("br", null));
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Reviews);

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UserIcon_jsx__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_css__);




var User = function User(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_2__style_css___default.a.user
  }, __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_2__style_css___default.a.userContainer,
    style: {
      display: "inline-block"
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_2__style_css___default.a.picContainer
  }, __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_1__UserIcon_jsx__["a" /* default */], {
    name: props.username
  })), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_2__style_css___default.a.userTextContainer
  }, __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_2__style_css___default.a.username,
    style: {
      textAlign: "center"
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("br", null), props.username), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("br", null), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_2__style_css___default.a.location
  }, __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("span", {
    className: __WEBPACK_IMPORTED_MODULE_2__style_css___default.a.locationFont
  }, "".concat(props.city, ", ").concat(props.state)), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("br", null), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("br", null)))));
};

/* harmony default export */ __webpack_exports__["a"] = (User);

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_css__);



function getInitials(name) {
  var newName = name.replace(/[^A-Z]/g, '');

  if (newName.length === 0) {
    return "OT";
  }

  return newName.toUpperCase();
}

;

function randomizeColors() {
  var color = '#';
  var letters = '0123456789ABCDEF';

  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

;

var UserIcon = function UserIcon(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.profileIcon,
    style: {
      background: randomizeColors()
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.name
  }, getInitials(props.name)));
};

/* harmony default export */ __webpack_exports__["a"] = (UserIcon);

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(34)(false);
// imports


// module
exports.push([module.i, "/* CSS for review component */\n\n.style__reviewContainer___MGzQE {\n    border-bottom: 1px solid #2d333f;\n    font-family: 'Josefin Sans', sans-serif;\n    color: #2d333f;\n    width: 80%;\n    height: auto;\n    display: flex;\n    align-items: flex-end;\n    margin-left: 10%;\n  }\n  \n  .style__reviewTime___2F3Pt {\n    margin-top: -2%;\n  }\n  \n  /* .review-content-container {\n    margin-top: 2%;\n    flex: 4;\n  } */\n  \n  .style__reviewText___2G-Lq {\n    width: 85%;\n  } \n  \n  .style__ratingsContainer___3i2o3 {\n    font-weight: bold;\n  }\n  \n  .style__rating___1TM2e {\n    color: #da3743;\n  }\n  \n  .style__iconContainer___2A2GE {\n    display: inline-block;\n    position: relative;\n  }\n  \n  /*CSS for username component*/\n  \n  .style__userContainer___3CyW- {\n    display: flex;\n    flex: 1;\n    margin-right: 20px;\n    margin-top: 10px;\n    flex-direction: column;\n  };\n  \n  .style__username___3EnAk {\n    text-align: center;\n  }\n  \n  .style__locationFont___gIwEh {\n    color: #6f737b;\n    font-size: 15px;\n    display: flex;\n    flex-wrap: wrap;\n    text-align: center;\n  }\n  \n  .style__profileIcon___31iU_ {\n    width: 60px;\n    height: 60px;\n    border-radius: 100px;\n    margin-top: 5px;\n    margin-left: 45px;\n  }\n  \n  .style__name___1brNH {\n    width: 100%;\n    text-align: center;\n    color: white;\n    padding-top: 25px;\n  }\n  \n  /*CSS for stars*/\n  \n  .style__starsComponent___30FiP {\n    display: flex;\n    flex-direction: row;\n    padding-bottom: 4%;\n  }\n  \n  .style__colored___11Lbz {\n    color: #da3743;\n  }\n  \n  .style__uncolored____9ueI {\n    color: #6f737b;\n  }\n  \n  /*CSS for header*/\n  \n  .style__headerContainer___18yaD {\n    font-family: 'Josefin Sans', sans-serif;\n    font-weight: bold;\n    margin: 15px 10% 0px 10%;\n    border-bottom: 1px solid #2d333f;\n    border-top: 1px solid #2d333f;\n    padding-top: 10px 0px 10px 5%;\n  }\n  \n  .style__averageContainer___2YSOF {\n    display: flex;\n    flex-wrap: wrap;\n  }\n  \n  .style__avgRatingBlock___TDPfi {\n    margin-right: 10px;\n  }\n  \n  .style__headerIconContainer___2GoqB {\n    margin-bottom: 5px;\n  }\n  \n  .style__award___1Kqpr {\n    margin: 10px 0px 20px 0px;\n    border: 1px solid #2d333f;\n    height: 50px;\n    width: 300px;\n    border-radius: 8px;\n    text-align: center;\n  }\n  \n  .style__award___1Kqpr:hover {\n    border: 5px solid #da3743;\n    outline: none;\n  }\n  \n  .style__awardText___3thOi {\n    margin-top: 10px;\n  }\n  \n  /* CSS for bargraph */\n  \n  .style__bargraph___MYvjJ {\n    display: block;\n    position: absolute;\n    top: 94px;\n    left: 60%;\n  }\n  \n  .style__headerInfo___1Ywkd {\n    max-width: 50%;\n  }\n  \n  @media all and (max-width: 975px) and (min-width: 300px) {\n    .style__header-info___101g4 {\n      max-width: 20%;\n    }\n  }\n  \n  .style__barNumber___1pFIA {\n    font-family: 'Josefin Sans', sans-serif;\n    font-weight: bold;\n  }\n  \n  \n  .style__barLine___3gTV_ {\n    height: 20px;\n    width: 300px;\n    margin-bottom: 4px;\n    border: 1px solid #B9B4B4;\n    border-radius: 3px;\n  }\n  \n  .style__barLineRed___2O4Vu { \n    background: #da3743;\n    height: 20px;\n  }\n  \n  .style__emphasize___1BQ9x {\n    font-weight: bold;\n  }\n  \n  /*Sorting CSS*/\n  \n  .style__dropdown___26Qyl:hover {\n    border: 5px solid #da3743;\n    outline: none;\n  }\n  \n  .style__dropdown___26Qyl:focus{\n    outline: none;\n  }\n  \n   /* to fix */\n\n   .style__sortingText___1pCmU{\n    font-family: 'Josefin Sans', sans-serif;\n    margin-left: 10%;\n    margin-top: 20px;\n    font-size: 20px;\n    display: flex;\n    justify-content: flex-start;\n  }\n\n  .style__dropdown___26Qyl {\n    width: 200px;\n    height: 30px;\n    margin-left: 12px;\n    font-family: 'Josefin Sans', sans-serif;\n    border-radius: 15px;\n    justify-content: flex-start;\n  }\n  \n  /*Search Container*/\n  form.style__searchContainer___1ApL8 input[type=text]{\n    width: 200px;\n    height: 10px;\n    padding: 10px;\n    border-radius: 5px;\n    margin-right: 800px;\n    /* margin-left: -21%; */\n    margin-left: 283px;\n    /* margin-top: 17px; */\n    justify-content: flex-start;\n  }\n  /*end to fix */\n\n  form.style__searchContainer___1ApL8 input[type=text]:focus {\n    outline: none;\n  }\n\n  form.style__searchContainer___1ApL8 input[type=text]:hover{\n    border: 2px solid #da3743\n  }\n  \n  .style__searchButton___1nmtj {\n    height: 33px;\n    border-radius: 5px;\n    margin-right: 215px\n  }\n\n  .style__searchButton___1nmtj:focus {\n    outline: none;\n  }\n\n  /* #fixedWidth {\n    width: 700px \n  } */", ""]);

// exports
exports.locals = {
	"reviewContainer": "style__reviewContainer___MGzQE",
	"reviewTime": "style__reviewTime___2F3Pt",
	"reviewText": "style__reviewText___2G-Lq",
	"ratingsContainer": "style__ratingsContainer___3i2o3",
	"rating": "style__rating___1TM2e",
	"iconContainer": "style__iconContainer___2A2GE",
	"userContainer": "style__userContainer___3CyW-",
	"username": "style__username___3EnAk",
	"locationFont": "style__locationFont___gIwEh",
	"profileIcon": "style__profileIcon___31iU_",
	"name": "style__name___1brNH",
	"starsComponent": "style__starsComponent___30FiP",
	"colored": "style__colored___11Lbz",
	"uncolored": "style__uncolored____9ueI",
	"headerContainer": "style__headerContainer___18yaD",
	"averageContainer": "style__averageContainer___2YSOF",
	"avgRatingBlock": "style__avgRatingBlock___TDPfi",
	"headerIconContainer": "style__headerIconContainer___2GoqB",
	"award": "style__award___1Kqpr",
	"awardText": "style__awardText___3thOi",
	"bargraph": "style__bargraph___MYvjJ",
	"headerInfo": "style__headerInfo___1Ywkd",
	"header-info": "style__header-info___101g4",
	"barNumber": "style__barNumber___1pFIA",
	"barLine": "style__barLine___3gTV_",
	"barLineRed": "style__barLineRed___2O4Vu",
	"emphasize": "style__emphasize___1BQ9x",
	"dropdown": "style__dropdown___26Qyl",
	"sortingText": "style__sortingText___1pCmU",
	"searchContainer": "style__searchContainer___1ApL8",
	"searchButton": "style__searchButton___1nmtj"
};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(36);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {
		return null;
	}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 36 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_css__);



var Star = function Star(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("i", {
    className: props.colored ? "fas fa-star ".concat(__WEBPACK_IMPORTED_MODULE_1__style_css___default.a.colored) : "fas fa-star ".concat(__WEBPACK_IMPORTED_MODULE_1__style_css___default.a.uncolored)
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Star);

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_css__);



var NoReviews = function NoReviews(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.noReviewsContainer
  }, __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("h1", null, "Be The First to Review This Restaurant"), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("p", null, "Write a review"), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("br", null), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("p", null, "At present, ", props.restaurantName, " has no reviews. Please add a review after your dining experience to help others make a decision about where to eat."));
};

/* harmony default export */ __webpack_exports__["a"] = (NoReviews); //add restaurant name here? At present, restaurantName has no reviews.

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Stars_jsx__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__BarGraph_jsx__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__style_css__);





var findOverallRatingOfRestaurant = function findOverallRatingOfRestaurant(list) {
  var sum = 0;
  list.forEach(function (review) {
    sum += review.overall_rating;
  });
  return parseFloat((sum / list.length).toFixed(1));
};

var findFoodRatingOfRestaurant = function findFoodRatingOfRestaurant(list) {
  var sum = 0;
  list.forEach(function (review) {
    sum += review.food_rating;
  });
  return parseFloat((sum / list.length).toFixed(1));
};

var findServiceRatingOfRestaurant = function findServiceRatingOfRestaurant(list) {
  var sum = 0;
  list.forEach(function (review) {
    sum += review.service_rating;
  });
  return parseFloat((sum / list.length).toFixed(1));
};

var findAmbienceRatingOfRestaurant = function findAmbienceRatingOfRestaurant(list) {
  var sum = 0;
  list.forEach(function (review) {
    sum += review.ambience_rating;
  });
  return parseFloat((sum / list.length).toFixed(1));
};

var wouldRecommend = function wouldRecommend(list, listLength) {
  var arr = [];
  var sum = 0;
  list.forEach(function (review) {
    if (review.overall_rating >= 3) {
      arr.push(1);
    }
  });
  arr.forEach(function (count) {
    sum += count;
  });
  return Math.ceil(sum / listLength * 100);
};

var Header = function Header(props) {
  var averageRating = findOverallRatingOfRestaurant(props.restaurantInfo);
  return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_3__style_css___default.a.topContainer
  }, __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_3__style_css___default.a.headerContainer
  }, __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_3__style_css___default.a.headerTopContainer
  }, __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_3__style_css___default.a.headerInfo
  }, __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("h1", null, "What ", props.reviewsCount, " People Are Saying"), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("p", {
    className: __WEBPACK_IMPORTED_MODULE_3__style_css___default.a.emphasize
  }, "Overall ratings and reviews"), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("p", null, "Reviews can only be made by diners who have eaten at this restaurant"), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_3__style_css___default.a.averageContainer
  }, __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_3__style_css___default.a.avgRatingBlock
  }, __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_1__Stars_jsx__["a" /* default */], {
    starRating: Math.floor(averageRating)
  })), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("span", null, averageRating, " stars based on recent ratings")), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("br", null), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_3__style_css___default.a.averageBlock
  }, __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("span", {
    className: __WEBPACK_IMPORTED_MODULE_3__style_css___default.a.rating
  }, "\xA0", findFoodRatingOfRestaurant(props.restaurantInfo)), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("span", null, " Food "), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("span", {
    className: __WEBPACK_IMPORTED_MODULE_3__style_css___default.a.rating
  }, "\xA0", findServiceRatingOfRestaurant(props.restaurantInfo)), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("span", null, " Service "), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("span", {
    className: __WEBPACK_IMPORTED_MODULE_3__style_css___default.a.rating
  }, "\xA0", findAmbienceRatingOfRestaurant(props.restaurantInfo)), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("span", null, " Ambience ")), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("br", null), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_3__style_css___default.a.headerIconContainer
  }, __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("img", {
    src: "./noise.png"
  }), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("span", null, " Noise - Moderate "), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("br", null), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("br", null), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("img", {
    src: "./like.png"
  }), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("span", null, "\xA0", wouldRecommend(props.restaurantInfo, props.reviewsCount), "% of people would recommend it to a friend "))), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_3__style_css___default.a.bargraphContainer
  }, __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement(__WEBPACK_IMPORTED_MODULE_2__BarGraph_jsx__["a" /* default */], {
    ratingsInfo: props.restaurantInfo
  }))), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("br", null), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_3__style_css___default.a.LovedFor
  }, __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("span", {
    className: __WEBPACK_IMPORTED_MODULE_3__style_css___default.a.emphasize
  }, "Loved For "), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("img", {
    src: "./info.png"
  }), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("br", null), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_3__style_css___default.a.award
  }, __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("img", {
    className: __WEBPACK_IMPORTED_MODULE_3__style_css___default.a.awardText,
    src: "./trophy.png"
  }), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("span", {
    className: __WEBPACK_IMPORTED_MODULE_3__style_css___default.a.awardText
  }, "\xA0Most Booked 1000-Point Tables"), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("span", null, props.restaurantInfo.restaurantName)))));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_css__);



var countRating5 = function countRating5(list) {
  var sum = 0;
  list.forEach(function (review) {
    if (review.overall_rating === 5) {
      sum++;
    }
  });
  return sum;
};

var countRating4 = function countRating4(list) {
  var sum = 0;
  list.forEach(function (review) {
    if (review.overall_rating === 4) {
      sum++;
    }
  });
  return sum;
};

var countRating3 = function countRating3(list) {
  var sum = 0;
  list.forEach(function (review) {
    if (review.overall_rating === 3) {
      sum++;
    }
  });
  return sum;
};

var countRating2 = function countRating2(list) {
  var sum = 0;
  list.forEach(function (review) {
    if (review.overall_rating === 2) {
      sum++;
    }
  });
  return sum;
};

var countRating1 = function countRating1(list) {
  var sum = 0;
  list.forEach(function (review) {
    if (review.overall_rating === 1) {
      sum++;
    }
  });
  return sum;
};

var BarGraph = function BarGraph(props) {
  var lengthOf5 = countRating5(props.ratingsInfo);
  var lengthOf4 = countRating4(props.ratingsInfo);
  var lengthOf3 = countRating3(props.ratingsInfo);
  var lengthOf2 = countRating2(props.ratingsInfo);
  var lengthOf1 = countRating1(props.ratingsInfo);
  var outOfPercentage = props.ratingsInfo.length;
  return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.bargraph
  }, __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("span", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.barNumber
  }, "5"), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.barLine
  }, __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.barLineRed,
    style: {
      width: lengthOf5 / outOfPercentage * 300 + "px"
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("span", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.barNumber
  }, "4"), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.barLine
  }, __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.barLineRed,
    style: {
      width: lengthOf4 / outOfPercentage * 300 + "px"
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("span", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.barNumber
  }, "3"), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.barLine
  }, __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.barLineRed,
    style: {
      width: lengthOf3 / outOfPercentage * 300 + "px"
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("span", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.barNumber
  }, "2"), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.barLine
  }, __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.barLineRed,
    style: {
      width: lengthOf2 / outOfPercentage * 300 + "px"
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("span", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.barNumber
  }, "1"), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.barLine
  }, __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.barLineRed,
    style: {
      width: lengthOf1 / outOfPercentage * 300 + "px"
    }
  }))));
};

/* harmony default export */ __webpack_exports__["a"] = (BarGraph);

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_css__);



var SelectMenu = function SelectMenu(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.dropdownMenu
  }, "Sort By", __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("select", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.dropdown,
    onChange: props.onSelectHandler,
    value: props.value
  }, __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("option", {
    value: "newest"
  }, "Newest"), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("option", {
    value: "oldest"
  }, "Oldest"), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("option", {
    value: "highest-rating"
  }, "Highest Rating"), __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("option", {
    value: "lowest-rating"
  }, "Lowest Rating")));
};

/* harmony default export */ __webpack_exports__["a"] = (SelectMenu);

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_css__);



var SearchBar = function SearchBar(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("div", null, __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("form", {
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.searchContainer
  }, __WEBPACK_IMPORTED_MODULE_0_react__["default"].createElement("input", {
    type: "text",
    placeholder: "Search...",
    name: "search",
    onChange: props.onSearch,
    className: __WEBPACK_IMPORTED_MODULE_1__style_css___default.a.inputText
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (SearchBar);

/***/ })
/******/ ]);