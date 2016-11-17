webpackJsonp([3],{

/***/ 279:
/***/ function(module, exports) {

	"use strict";
	/**
	 * Created by xihong.shi on 10/28/2016.
	 */
	var ActionType = (function () {
	    function ActionType() {
	    }
	    ActionType.HomeLinkClick = "CHANGE";
	    ActionType.LockInput = "LOCK";
	    ActionType.Init = "INIT";
	    //register action type
	    ActionType.UserNameCheck = "USER_NAME_CHECK";
	    ActionType.SetUserName = "SET_USER_NAME";
	    ActionType.PasswordCheck = "PASSWORD_CHECK";
	    ActionType.SetPassword = "SET_PASSWORD";
	    ActionType.ConfirmPasswordCheck = "CONFIRM_PASSWORD_CHECK";
	    ActionType.SetConfirmPassword = "SET_CONFIRM_PASSWORD";
	    ActionType.EmailCheck = "EMAIL_CHECK";
	    ActionType.SetEmail = "SET_EMAIL";
	    ActionType.VerificationCheck = "VERIFICATION_CHECK";
	    ActionType.SetVerification = "SET_VERIFICATION";
	    ActionType.SubmitInfoData = "SUBMIT_INFO_DATA";
	    ActionType.DealSelect = "DEAL_SELECT";
	    ActionType.UserNickNameCheck = "USER_NAME_CHECK";
	    ActionType.SetUserNickName = "SET_USER_NAME";
	    ActionType.UserPhoneCheck = "USER_PHONE_CHECK";
	    ActionType.SetUserPhone = "SET_USER_PHONE";
	    ActionType.PhoneCodeCheck = "PHONE_CODE_CHECK";
	    ActionType.SetPhoneCode = "SET_PHONE_CODE";
	    ActionType.SubmitSupplementaryInfoData = "SUBMIT_SUPPLEMENTARY_INFO_DATA";
	    ActionType.SendPhoneCode = "SENT_PHONE_CODE";
	    //login action type
	    ActionType.LoginNameCheck = "LOGIN_NAME_CHECK";
	    ActionType.SetLoginName = "SET_USER_NAME";
	    ActionType.SubmitLoginData = "SUBMIT_LOGIN_DATA";
	    return ActionType;
	}());
	exports.ActionType = ActionType;


/***/ },

/***/ 290:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var react_redux_1 = __webpack_require__(258);
	var redux_1 = __webpack_require__(237);
	var home_reducer_1 = __webpack_require__(291);
	var HomeBanner_1 = __webpack_require__(292);
	var HomeCatalogTitle_1 = __webpack_require__(293);
	var BlogList_1 = __webpack_require__(294);
	var DemoList_1 = __webpack_require__(295);
	var QuickLinks_1 = __webpack_require__(296);
	var newBlogData_1 = __webpack_require__(297);
	var demoListData_1 = __webpack_require__(298);
	var linksData_1 = __webpack_require__(299);
	var store = redux_1.createStore(home_reducer_1.HomeReducers.testReducer, {
	    isLock: false,
	    inputText: ""
	});
	var Home = (function (_super) {
	    __extends(Home, _super);
	    function Home() {
	        var _this = this;
	        _super.apply(this, arguments);
	        this.componentDidMount = function () {
	            var demoCount = _this.refs.DemoContent;
	            $(demoCount).find("div.demo-item").each(function () {
	                $(this).hoverdir({ hoverDelay: 50 });
	            });
	        };
	    }
	    Home.prototype.render = function () {
	        var blogComponents, demoComponents, linksComponents;
	        blogComponents = newBlogData_1.NewBlogDatas.NewBlogData.map(function (bloglist, index) {
	            return React.createElement(BlogList_1.BlogList, {key: index, bloglist: bloglist});
	        });
	        demoComponents = demoListData_1.DemoListDatas.DemoListData.map(function (demolist, index) {
	            return React.createElement(DemoList_1.DemoList, {key: index, demolist: demolist});
	        });
	        linksComponents = linksData_1.LinksDatas.LinksDtaa.map(function (linkslist, index) {
	            return React.createElement(QuickLinks_1.QuickLinks, {key: index, linkslist: linkslist});
	        });
	        return (React.createElement(react_redux_1.Provider, {store: store}, 
	            React.createElement("div", {className: "page"}, 
	                React.createElement(HomeBanner_1.HomeBanner, {store: store}), 
	                React.createElement("div", {className: "content "}, 
	                    React.createElement("div", {className: "home-main"}, 
	                        React.createElement(HomeCatalogTitle_1.HomeCatalogTitle, {titletext: "快速导航", titlebody: "快速便捷，为您直达核心内容"}), 
	                        React.createElement("div", {className: "quickLinksContent"}, linksComponents), 
	                        React.createElement(HomeCatalogTitle_1.HomeCatalogTitle, {titletext: "项目案例", titlebody: "说的多不如做的多，熟能生巧，万变不离其宗"}), 
	                        React.createElement("div", {className: "demoContent", ref: "DemoContent"}, demoComponents), 
	                        React.createElement(HomeCatalogTitle_1.HomeCatalogTitle, {titletext: "最新博文", titlebody: "温故而知新，学而时习之，不亦说乎"}), 
	                        React.createElement("div", {className: "blogContent"}, blogComponents))
	                ))
	        ));
	    };
	    return Home;
	}(React.Component));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Home;


/***/ },

/***/ 291:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var actiontype_constant_1 = __webpack_require__(279);
	/// <reference path="../interfaces/home.interface.d.ts"/>
	var HomeReducers = (function () {
	    function HomeReducers() {
	    }
	    HomeReducers.testReducer = function (state, action) {
	        switch (action.type) {
	            case actiontype_constant_1.ActionType.HomeLinkClick:
	                return Object.assign({}, state, {
	                    inputText: action.text
	                });
	            case actiontype_constant_1.ActionType.LockInput:
	                return Object.assign({}, state, {
	                    isLock: true
	                });
	            default:
	                return state;
	        }
	    };
	    return HomeReducers;
	}());
	exports.HomeReducers = HomeReducers;


/***/ },

/***/ 292:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var HomeBanner = (function (_super) {
	    __extends(HomeBanner, _super);
	    function HomeBanner() {
	        _super.apply(this, arguments);
	    }
	    HomeBanner.prototype.render = function () {
	        return (React.createElement("div", {className: "home-banner"}, 
	            React.createElement("h1", null, "BDots"), 
	            React.createElement("p", null, "为您记录生活中的点点滴滴，留下的足迹是成长的见证.")));
	    };
	    return HomeBanner;
	}(React.Component));
	exports.HomeBanner = HomeBanner;


/***/ },

/***/ 293:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var HomeCatalogTitle = (function (_super) {
	    __extends(HomeCatalogTitle, _super);
	    function HomeCatalogTitle() {
	        _super.apply(this, arguments);
	    }
	    HomeCatalogTitle.prototype.render = function () {
	        return (React.createElement("div", {className: "home-catalog-title"}, 
	            React.createElement("h1", null, this.props.titletext), 
	            React.createElement("p", null, this.props.titlebody)));
	    };
	    return HomeCatalogTitle;
	}(React.Component));
	exports.HomeCatalogTitle = HomeCatalogTitle;


/***/ },

/***/ 294:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var BlogList = (function (_super) {
	    __extends(BlogList, _super);
	    function BlogList() {
	        _super.apply(this, arguments);
	    }
	    BlogList.prototype.render = function () {
	        return (React.createElement("acticle", {className: "blog-list"}, 
	            React.createElement("header", null, 
	                React.createElement("span", {className: "blog-type"}, 
	                    React.createElement("i", {className: "fa fa-flag"}), 
	                    React.createElement("a", {href: this.props.bloglist.typeLink}, this.props.bloglist.type)), 
	                React.createElement("h2", null, 
	                    React.createElement("a", {href: this.props.bloglist.link}, this.props.bloglist.title)
	                )), 
	            React.createElement("div", {className: "blog-body"}, this.props.bloglist.body), 
	            React.createElement("footer", null, 
	                React.createElement("span", {className: "blog-muted"}, 
	                    React.createElement("i", {className: "fa fa-user"}), 
	                    React.createElement("a", {href: this.props.bloglist.userLink}, this.props.bloglist.anthor)), 
	                React.createElement("span", {className: "blog-muted"}, 
	                    React.createElement("i", {className: "fa fa-clock-o"}), 
	                    this.props.bloglist.date), 
	                React.createElement("span", {className: "blog-muted"}, 
	                    React.createElement("i", {className: "fa fa-eye"}), 
	                    this.props.bloglist.viewCount, 
	                    "阅读"), 
	                React.createElement("span", {className: "blog-muted"}, 
	                    React.createElement("i", {className: "fa fa-comment-o"}), 
	                    this.props.bloglist.commentCount, 
	                    "评论"))));
	    };
	    return BlogList;
	}(React.Component));
	exports.BlogList = BlogList;


/***/ },

/***/ 295:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var DemoList = (function (_super) {
	    __extends(DemoList, _super);
	    function DemoList() {
	        _super.apply(this, arguments);
	    }
	    DemoList.prototype.render = function () {
	        return (React.createElement("div", {className: "demo-item"}, 
	            React.createElement("a", {href: this.props.demolist.link}, 
	                React.createElement("img", {src: this.props.demolist.imgUrl}), 
	                React.createElement("div", {className: "demo-popup"}, 
	                    React.createElement("span", {className: "demo-popup-title"}, this.props.demolist.title), 
	                    React.createElement("span", {className: "demo-popup-body"}, this.props.demolist.body)))
	        ));
	    };
	    return DemoList;
	}(React.Component));
	exports.DemoList = DemoList;


/***/ },

/***/ 296:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var QuickLinks = (function (_super) {
	    __extends(QuickLinks, _super);
	    function QuickLinks() {
	        _super.apply(this, arguments);
	    }
	    QuickLinks.prototype.render = function () {
	        return (React.createElement("a", {href: this.props.linkslist.url, className: "icon-item "}, 
	            React.createElement("i", {className: 'fa ' + this.props.linkslist.icon})
	        ));
	    };
	    return QuickLinks;
	}(React.Component));
	exports.QuickLinks = QuickLinks;


/***/ },

/***/ 297:
/***/ function(module, exports) {

	"use strict";
	/**
	 * Created by xihong.shi on 11/15/2016.
	 */
	var NewBlogDatas = (function () {
	    function NewBlogDatas() {
	    }
	    NewBlogDatas.NewBlogData = [
	        {
	            type: "Typescript",
	            title: "Express学习笔记——中间件",
	            body: "中间件函数能够访问请求对象 (req)、响应对象 (res) 以及应用程序的请求/响应循环中的下一个中间件函数。下一个中间件函数通常由名为 next 的变量来表示。 对于Express的中间件，之前不是很理解这个是什么东西，查看了好多博客 ...",
	            link: "http://bdots.net/blog/archives/53",
	            typeLink: "http://bdots.net/blog/archives/category/typescript",
	            userLink: "http://bdots.net/blog/archives/author/xiaoshizi",
	            anthor: "@小柿子",
	            date: "6小时前",
	            viewCount: "41",
	            commentCount: "10"
	        },
	        {
	            type: "TypeScript",
	            title: "搭建第一个TypeScript和React示例",
	            body: "本文重点讲述如何利用TypeScript、React、webpack创建一个TypeScript工程。 第一步：创建你的项目目录 在NPM中利用mkdir或者手动下面的项目目录...",
	            link: "http://bdots.net/blog/archives/43",
	            typeLink: "http://bdots.net/blog/archives/category/typescript",
	            userLink: "http://bdots.net/blog/archives/author/xiaoshizi",
	            anthor: "@小柿子",
	            date: "1天前",
	            viewCount: "50",
	            commentCount: "21"
	        },
	        {
	            type: "JQuery",
	            title: "在RequireJS中引用layer插件",
	            body: "用requirejs引用jquery layer插件会导致样式无法加载， 官方给出解决方案是添加layer.config， 如下： requirejs.config({ baseUrl: 'js/libs', paths...",
	            link: "http://bdots.net/blog/archives/31",
	            typeLink: "http://bdots.net/blog/archives/category/jquery",
	            userLink: "http://bdots.net/blog/archives/author/xiaoshizi",
	            anthor: "@小柿子",
	            date: "2天前",
	            viewCount: "80",
	            commentCount: "32"
	        }
	    ];
	    return NewBlogDatas;
	}());
	exports.NewBlogDatas = NewBlogDatas;


/***/ },

/***/ 298:
/***/ function(module, exports) {

	"use strict";
	/**
	 * Created by xihong.shi on 11/15/2016.
	 */
	var DemoListDatas = (function () {
	    function DemoListDatas() {
	    }
	    DemoListDatas.DemoListData = [
	        {
	            title: "BMW System",
	            body: "web Front-end dev",
	            link: "http://bdots.net/demo/demo/PfizerRQCO_20160302_V2/index.html",
	            imgUrl: "src/images/demo1.png"
	        },
	        {
	            title: "SAP Fiori",
	            body: "SAP Fiori APP Dev",
	            link: "https://www.sapfioritrial.com/sites?helpset=trial&sap-client=001",
	            imgUrl: "src/images/demo2.png"
	        },
	        {
	            title: "iColor Web",
	            body: "iColor web front-end",
	            link: "https://www.icolor.com.cn",
	            imgUrl: "src/images/demo9.jpg"
	        },
	        {
	            title: "暂无",
	            body: "",
	            link: "https://www.icolor.com.cn",
	            imgUrl: "src/images/demo4.jpg"
	        },
	        {
	            title: "暂无",
	            body: "",
	            link: "https://www.icolor.com.cn",
	            imgUrl: "src/images/demo5.jpg"
	        },
	        {
	            title: "暂无",
	            body: "",
	            link: "https://www.icolor.com.cn",
	            imgUrl: "src/images/demo6.jpg"
	        },
	        {
	            title: "暂无",
	            body: "",
	            link: "https://www.icolor.com.cn",
	            imgUrl: "src/images/demo7.jpg"
	        },
	        {
	            title: "暂无",
	            body: "",
	            link: "https://www.icolor.com.cn",
	            imgUrl: "src/images/demo8.jpg"
	        }
	    ];
	    return DemoListDatas;
	}());
	exports.DemoListDatas = DemoListDatas;


/***/ },

/***/ 299:
/***/ function(module, exports) {

	"use strict";
	/**
	 * Created by xihong.shi on 11/15/2016.
	 */
	var LinksDatas = (function () {
	    function LinksDatas() {
	    }
	    LinksDatas.LinksDtaa = [
	        {
	            url: "###",
	            icon: "fa-bookmark"
	        },
	        {
	            url: "###",
	            icon: "fa-newspaper-o"
	        },
	        {
	            url: "###",
	            icon: "fa-tags"
	        },
	        {
	            url: "###",
	            icon: "fa-html5"
	        },
	        {
	            url: "###",
	            icon: "fa-github"
	        },
	        {
	            url: "###",
	            icon: "fa-css3"
	        }, {
	            url: "###",
	            icon: "fa-gavel"
	        },
	        {
	            url: "###",
	            icon: "fa-eercast"
	        },
	        {
	            url: "###",
	            icon: "fa-user-o"
	        },
	        {
	            url: "###",
	            icon: "fa-cloud"
	        },
	        {
	            url: "###",
	            icon: "fa-flag"
	        },
	        {
	            url: "###",
	            icon: "fa-weibo"
	        }
	    ];
	    return LinksDatas;
	}());
	exports.LinksDatas = LinksDatas;


/***/ }

});
//# sourceMappingURL=home.3743b.chunk.js.map