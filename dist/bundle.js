webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(34);
	var react_router_1 = __webpack_require__(172);
	var rootRoute = {
	    path: '/',
	    indexRoute: {
	        getComponent: function (nextState, cb) {
	            __webpack_require__.e/* nsure */(3, function (require) {
	                cb(null, __webpack_require__(290).default);
	            });
	        },
	    },
	    getComponent: function (nextState, cb) {
	        __webpack_require__.e/* nsure */(4, function (require) {
	            cb(null, __webpack_require__(300).default);
	        });
	    },
	    childRoutes: [
	        __webpack_require__(235),
	        __webpack_require__(282)
	    ]
	};
	ReactDOM.render((React.createElement(react_router_1.Router, {history: react_router_1.hashHistory, routes: rootRoute})), document.getElementById("mywebcontent"));


/***/ },

/***/ 235:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by xihong.shi on 10/17/2016.
	 */
	module.exports = {
	    path: 'login',
	    getComponent: function (nextState, cb) {
	        __webpack_require__.e/* nsure */(1, function (require) {
	            cb(null, __webpack_require__(236).default);
	        });
	    }
	};


/***/ },

/***/ 282:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    path: 'register',
	    /*getChildRoutes(partialNextState:any, cb:any) {
	        require.ensure([], (require:any) => {
	            cb(null, [
	                require('./info/info.route.ts'),
	                require('./complete/complete.route.ts')
	            ])
	        })
	    },*/
	    getComponent: function (nextState, cb) {
	        __webpack_require__.e/* nsure */(2, function (require) {
	            cb(null, __webpack_require__(283).default);
	        });
	    }
	};


/***/ }

});
//# sourceMappingURL=bundle.js.map