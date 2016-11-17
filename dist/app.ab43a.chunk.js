webpackJsonp([4],{

/***/ 300:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var TopToolbar_1 = __webpack_require__(301);
	var Footer_1 = __webpack_require__(303);
	var App = (function (_super) {
	    __extends(App, _super);
	    function App() {
	        _super.apply(this, arguments);
	    }
	    App.prototype.render = function () {
	        return (React.createElement("div", {className: "appcontent"}, 
	            React.createElement(TopToolbar_1.TopToolbar, null), 
	            this.props.children, 
	            React.createElement(Footer_1.Footer, null)));
	    };
	    return App;
	}(React.Component));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = App;


/***/ },

/***/ 301:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var react_router_1 = __webpack_require__(172);
	var links_constant_1 = __webpack_require__(302);
	var TopToolbar = (function (_super) {
	    __extends(TopToolbar, _super);
	    function TopToolbar() {
	        _super.apply(this, arguments);
	    }
	    TopToolbar.prototype.render = function () {
	        return (React.createElement("div", {className: "toptoolbar"}, 
	            React.createElement("div", {className: "toptoolbarcontent"}, 
	                React.createElement("div", {className: "row"}, 
	                    React.createElement("div", {className: "leftmenu col-md-6"}, 
	                        React.createElement("ul", null, 
	                            React.createElement("li", null, 
	                                React.createElement(react_router_1.Link, {to: "/register"}, "注册")
	                            ), 
	                            React.createElement("li", null, 
	                                React.createElement(react_router_1.Link, {to: "/login"}, "亲，请登录")
	                            ))
	                    ), 
	                    React.createElement("div", {className: "rightmenu col-md-6"}, 
	                        React.createElement("ul", null, 
	                            React.createElement("li", null, 
	                                React.createElement(react_router_1.Link, {to: "/"}, "首页")
	                            ), 
	                            React.createElement("li", null, 
	                                React.createElement("a", {href: links_constant_1.LinksConstant.BlogUrl, target: "_blank"}, "博客")
	                            ), 
	                            React.createElement("li", null, 
	                                React.createElement("a", {href: links_constant_1.LinksConstant.BBSUrl, target: "_blank"}, "论坛")
	                            ), 
	                            React.createElement("li", null, 
	                                React.createElement("a", {href: links_constant_1.LinksConstant.DemoUrl, target: "_blank"}, "案例")
	                            ), 
	                            React.createElement("li", null, 
	                                React.createElement("a", {href: "###"}, "收藏站点")
	                            ))
	                    ))
	            )
	        ));
	    };
	    return TopToolbar;
	}(React.Component));
	exports.TopToolbar = TopToolbar;


/***/ },

/***/ 302:
/***/ function(module, exports) {

	"use strict";
	var LinksConstant = (function () {
	    function LinksConstant() {
	    }
	    //link url
	    LinksConstant.BlogUrl = "http://bdots.net/blog";
	    LinksConstant.BBSUrl = "http://bdots.net/bbs";
	    LinksConstant.GitUrl = "###";
	    LinksConstant.DemoUrl = "http://bdots.net/demo";
	    //img url
	    LinksConstant.WebChartQRCodeImgUrl = "src/images/weixinqrcode.png";
	    return LinksConstant;
	}());
	exports.LinksConstant = LinksConstant;


/***/ },

/***/ 303:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var react_router_1 = __webpack_require__(172);
	var links_constant_1 = __webpack_require__(302);
	var Footer = (function (_super) {
	    __extends(Footer, _super);
	    function Footer() {
	        _super.apply(this, arguments);
	    }
	    Footer.prototype.render = function () {
	        return (React.createElement("footer", {className: "footer"}, 
	            React.createElement("div", {className: "footercontent"}, 
	                React.createElement("div", {className: "footermain row"}, 
	                    React.createElement("div", {className: "footerabout col-md-4"}, 
	                        React.createElement("h1", null, "关于BDots"), 
	                        React.createElement("p", {className: "title"}, "生活小点滴，人生大智慧"), 
	                        React.createElement("p", null, "BDots, 为自己记录生活中的点点滴滴。")), 
	                    React.createElement("div", {className: "footerinfo col-md-4"}, 
	                        React.createElement("h1", null, "快速链接"), 
	                        React.createElement("p", null, 
	                            React.createElement("a", {href: links_constant_1.LinksConstant.GitUrl}, "GitHub")
	                        ), 
	                        React.createElement("p", null, 
	                            React.createElement("a", {href: links_constant_1.LinksConstant.BlogUrl, target: "_blank"}, "博客")
	                        ), 
	                        React.createElement("p", null, 
	                            React.createElement("a", {href: links_constant_1.LinksConstant.BBSUrl, target: "_blank"}, "论坛")
	                        )), 
	                    React.createElement("div", {className: "footerwechart col-md-4"}, 
	                        React.createElement("h1", null, "微信号"), 
	                        React.createElement("img", {src: links_constant_1.LinksConstant.WebChartQRCodeImgUrl, alt: "", title: ""}))), 
	                React.createElement("div", {className: "footerlinks"}, 
	                    React.createElement("ul", null, 
	                        React.createElement("li", null, "Copyright © 2016 ( 苏ICP备15007316号 )"), 
	                        React.createElement("li", null, 
	                            React.createElement(react_router_1.Link, {to: "/about"}, "联系我们")
	                        ), 
	                        React.createElement("li", null, 
	                            React.createElement(react_router_1.Link, {to: "/help"}, "帮助")
	                        ), 
	                        React.createElement("li", null, 
	                            React.createElement(react_router_1.Link, {to: "/feedback"}, "反馈")
	                        ))
	                ))
	        ));
	    };
	    return Footer;
	}(React.Component));
	exports.Footer = Footer;


/***/ }

});
//# sourceMappingURL=app.ab43a.chunk.js.map