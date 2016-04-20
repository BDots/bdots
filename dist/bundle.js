/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var hello_1 = __webpack_require__(3);
	ReactDOM.render(React.createElement(hello_1.HelloComponent, {framework: "React"}), document.getElementById("example"));


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var react_bootstrap_1 = __webpack_require__(4);
	var HelloComponent = (function (_super) {
	    __extends(HelloComponent, _super);
	    function HelloComponent() {
	        _super.apply(this, arguments);
	    }
	    HelloComponent.prototype.render = function () {
	        var helloword = new HelloWord(this.props.framework);
	        //return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
	        return React.createElement(react_bootstrap_1.Button, {bsStyle: "primary", bsSize: "large", block: true}, helloword.helloword());
	    };
	    return HelloComponent;
	}(React.Component));
	exports.HelloComponent = HelloComponent;
	var HelloWord = (function () {
	    function HelloWord(message) {
	        this.Message = message;
	    }
	    HelloWord.prototype.helloword = function () {
	        return "Hello Word " + this.Message;
	    };
	    return HelloWord;
	}());


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = ReactBootstrap;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map