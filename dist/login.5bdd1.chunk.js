webpackJsonp([1],{

/***/ 236:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var redux_1 = __webpack_require__(237);
	var react_redux_1 = __webpack_require__(258);
	var LoginForm_1 = __webpack_require__(277);
	var login_reducer_1 = __webpack_require__(280);
	var defultInitState = {
	    loginName: "",
	    password: "",
	    verification: "",
	    loginNameError: false,
	    loginNameErrorInfo: "",
	    passwordError: false,
	    passwordErrorInfo: "",
	    verificationError: false,
	    verificationErrorInfo: "",
	    verificationImgUrl: "src/images/VerifyCode.png"
	};
	var store = redux_1.createStore(login_reducer_1.LoginReducers.LoginReducer, defultInitState);
	var locationKey;
	var Login = (function (_super) {
	    __extends(Login, _super);
	    function Login() {
	        _super.apply(this, arguments);
	    }
	    Login.prototype.componentWillReceiveProps = function () {
	    };
	    Login.prototype.ComponentDidMOunt = function () {
	    };
	    Login.prototype.render = function () {
	        if (locationKey !== this.props.location.key) {
	            store.dispatch({ type: "INIT" });
	            locationKey = this.props.location.key;
	        }
	        return (React.createElement(react_redux_1.Provider, {store: store}, 
	            React.createElement("div", {className: "content main page login"}, 
	                React.createElement("div", {className: "row"}, 
	                    React.createElement("div", {className: "form-box"}, 
	                        React.createElement(LoginForm_1.LoginForm, {store: store})
	                    )
	                )
	            )
	        ));
	    };
	    return Login;
	}(React.Component));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Login;


/***/ },

/***/ 277:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var React = __webpack_require__(1);
	var react_router_1 = __webpack_require__(172);
	var Utils_1 = __webpack_require__(278);
	var actiontype_constant_1 = __webpack_require__(279);
	var LoginForm = (function (_super) {
	    __extends(LoginForm, _super);
	    function LoginForm() {
	        var _this = this;
	        _super.apply(this, arguments);
	        this.onLoginNameCheck = function (text) {
	            _this.props.store.dispatch({ type: actiontype_constant_1.ActionType.LoginNameCheck, text: text });
	        };
	        this.onSetLoginName = function (text) {
	            _this.props.store.dispatch({ type: actiontype_constant_1.ActionType.SetLoginName, text: text });
	        };
	        this.onPasswordCheck = function (text) {
	            _this.props.store.dispatch({ type: actiontype_constant_1.ActionType.PasswordCheck, text: text });
	        };
	        this.onSetPassword = function (text) {
	            _this.props.store.dispatch({ type: actiontype_constant_1.ActionType.SetPassword, text: text });
	        };
	        this.onVerificationCheck = function (text) {
	            _this.props.store.dispatch({ type: actiontype_constant_1.ActionType.VerificationCheck, text: text });
	        };
	        this.onSetVerification = function (text) {
	            _this.props.store.dispatch({ type: actiontype_constant_1.ActionType.SetVerification, text: text });
	        };
	        this.onSubmitData = function (event) {
	            if (!Utils_1.Utils.stringIsNullOrEmpty(_this.props.store.getState().loginName) &&
	                !_this.props.store.getState().loginNameError &&
	                !Utils_1.Utils.stringIsNullOrEmpty(_this.props.store.getState().password) &&
	                !_this.props.store.getState().passwordError &&
	                !Utils_1.Utils.stringIsNullOrEmpty(_this.props.store.getState().verification) &&
	                !_this.props.store.getState().verificationError) {
	                //submit data and jump next step
	                _this.context.router.push("/");
	            }
	            else {
	                _this.onLoginNameCheck(_this.props.store.getState().loginName);
	                _this.onPasswordCheck(_this.props.store.getState().password);
	                _this.onVerificationCheck(_this.props.store.getState().verification);
	            }
	        };
	    }
	    LoginForm.prototype.render = function () {
	        var _this = this;
	        return (React.createElement("div", {className: "form-content col-md-12"}, 
	            React.createElement("div", {className: "col-md-8 col-md-offset-2"}, 
	                React.createElement("div", {className: "form-group"}, 
	                    React.createElement("label", {className: "form-text"}, "账号："), 
	                    React.createElement("input", {type: "text", placeholder: "请输入登录账号，用户名/手机号码/邮箱账号，任选其一", className: this.props.store.getState().loginNameError ? "form-control error-border" : "form-control", onBlur: function (e) { return _this.onLoginNameCheck(e.target.value); }, onChange: function (e) { return _this.onSetLoginName(e.target.value); }, value: this.props.store.getState().loginName}), 
	                    React.createElement("label", {className: "tf-error", style: { display: this.props.store.getState().loginNameError ? "block" : "none" }}, this.props.store.getState().loginNameErrorInfo)), 
	                React.createElement("div", {className: "form-group"}, 
	                    React.createElement("label", {className: "form-text"}, "密码："), 
	                    React.createElement("input", {type: "password", placeholder: "请输入登录密码", className: this.props.store.getState().passwordError ? "form-control error-border" : "form-control", onBlur: function (e) { return _this.onPasswordCheck(e.target.value); }, onChange: function (e) { return _this.onSetPassword(e.target.value); }, value: this.props.store.getState().password}), 
	                    React.createElement("label", {className: "tf-error", style: { display: this.props.store.getState().passwordError ? "block" : "none" }}, this.props.store.getState().passwordErrorInfo)), 
	                React.createElement("div", {className: "form-group"}, 
	                    React.createElement("label", {className: "form-text"}, "验证码："), 
	                    React.createElement("div", {className: this.props.store.getState().verificationError ? "verification-code div-border error-border" : "verification-code div-border"}, 
	                        React.createElement("input", {type: "text", placeholder: "请输入右边图中的字符", className: "form-control", onBlur: function (e) { return _this.onVerificationCheck(e.target.value); }, onChange: function (e) { return _this.onSetVerification(e.target.value); }, value: this.props.store.getState().verification}), 
	                        React.createElement("div", {className: "verification-img"}, 
	                            React.createElement("img", {src: this.props.store.getState().verificationImgUrl})
	                        )), 
	                    React.createElement("label", {className: "tf-error", style: { display: this.props.store.getState().verificationError ? "block" : "none" }}, this.props.store.getState().verificationErrorInfo)), 
	                React.createElement("div", {className: "form-group"}, 
	                    React.createElement("button", {type: "button", className: "btn", onClick: function (e) { return _this.onSubmitData(e); }}, "立即登录")
	                ), 
	                React.createElement("div", {className: "form-group"}, 
	                    React.createElement("div", {className: "loginlink"}, 
	                        React.createElement("div", {className: "left"}, 
	                            React.createElement(react_router_1.Link, {to: "/register"}, "忘记密码？")
	                        ), 
	                        React.createElement("div", {className: "right"}, 
	                            "还没有账号？", 
	                            React.createElement(react_router_1.Link, {to: "/register"}, "去注册")))
	                ))
	        ));
	    };
	    LoginForm.contextTypes = {
	        router: React.PropTypes.object,
	    };
	    LoginForm = __decorate([
	        Utils_1.Utils.subscribeToStore()
	    ], LoginForm);
	    return LoginForm;
	}(React.Component));
	exports.LoginForm = LoginForm;


/***/ },

/***/ 278:
/***/ function(module, exports) {

	"use strict";
	var Utils = (function () {
	    function Utils() {
	    }
	    Utils.subscribeToParentStore = function (store) {
	        return function (target) {
	            var didMount = target.prototype.componentDidMount;
	            target.prototype.componentDidMount = function () {
	                var _this = this;
	                if (didMount != null)
	                    didMount.call(this);
	                this.unsubscribe = store.subscribe(function () { return _this.forceUpdate(); });
	            };
	            var willUnmount = target.prototype.componentWillUnmount;
	            target.prototype.componentWillUnmount = function () {
	                if (willUnmount != null)
	                    willUnmount.call(this);
	                this.unsubscribe();
	            };
	        };
	    };
	    Utils.subscribeToStore = function () {
	        return function (target) {
	            var didMount = target.prototype.componentDidMount;
	            target.prototype.componentDidMount = function () {
	                var _this = this;
	                if (didMount != null)
	                    didMount.call(this);
	                this.unsubscribe = this.props.store.subscribe(function () { return _this.forceUpdate(); });
	            };
	            var willUnmount = target.prototype.componentWillUnmount;
	            target.prototype.componentWillUnmount = function () {
	                if (willUnmount != null)
	                    willUnmount.call(this);
	                this.unsubscribe();
	            };
	        };
	    };
	    Utils.Links = function () {
	        var aLinksList = [];
	        aLinksList.push({
	            "blogUrl": "http://bdots.net/blog",
	            "bbsUrl": "http://bdots.net/bbs/",
	            "gitUrl": "###",
	            "demoUrl": "http://bdots.net/demo/"
	        });
	        return aLinksList;
	    };
	    Utils.ImagesUrl = function () {
	        var aImagesUrlList = [];
	        aImagesUrlList.push({
	            "webcharqrimg": "src/images/weixinqrcode.png"
	        });
	        return aImagesUrlList;
	    };
	    Utils.stringIsNullOrEmpty = function (obj) {
	        if (obj == undefined || obj == null) {
	            return true;
	        }
	        if (obj.toString().trim().length <= 0) {
	            return true;
	        }
	        return false;
	    };
	    return Utils;
	}());
	exports.Utils = Utils;


/***/ },

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

/***/ 280:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var actiontype_constant_1 = __webpack_require__(279);
	var login_checks_1 = __webpack_require__(281);
	var LoginReducers = (function () {
	    function LoginReducers() {
	    }
	    LoginReducers.LoginReducer = function (state, action) {
	        switch (action.type) {
	            case actiontype_constant_1.ActionType.Init:
	                return Object.assign({}, state, LoginReducers.initState);
	            //check user name
	            case actiontype_constant_1.ActionType.LoginNameCheck:
	                var oCheck = login_checks_1.LoginCheck.checkLoginName(action.text);
	                return Object.assign({}, state, {
	                    loginNameError: oCheck.isError,
	                    loginNameErrorInfo: oCheck.info
	                });
	            //set user name
	            case actiontype_constant_1.ActionType.SetLoginName:
	                return Object.assign({}, state, {
	                    loginName: action.text
	                });
	            //check password
	            case actiontype_constant_1.ActionType.PasswordCheck:
	                var oCheck = login_checks_1.LoginCheck.checkPassword(action.text);
	                return Object.assign({}, state, {
	                    passwordError: oCheck.isError,
	                    passwordErrorInfo: oCheck.info
	                });
	            //set password
	            case actiontype_constant_1.ActionType.SetPassword:
	                return Object.assign({}, state, {
	                    password: action.text
	                });
	            //check verification
	            case actiontype_constant_1.ActionType.VerificationCheck:
	                var oCheck = login_checks_1.LoginCheck.checkVerificationCode(action.text, "mste");
	                return Object.assign({}, state, {
	                    verificationError: oCheck.isError,
	                    verificationErrorInfo: oCheck.info
	                });
	            //set verification
	            case actiontype_constant_1.ActionType.SetVerification:
	                return Object.assign({}, state, {
	                    verification: action.text
	                });
	            default:
	                return state;
	        }
	    };
	    LoginReducers.initState = {
	        loginName: "",
	        password: "",
	        verification: "",
	        loginNameError: false,
	        loginNameErrorInfo: "",
	        passwordError: false,
	        passwordErrorInfo: "",
	        verificationError: false,
	        verificationErrorInfo: "",
	        verificationImgUrl: "src/images/VerifyCode.png"
	    };
	    return LoginReducers;
	}());
	exports.LoginReducers = LoginReducers;


/***/ },

/***/ 281:
/***/ function(module, exports) {

	"use strict";
	/**
	 * Created by xihong.shi on 10/10/2016.
	 */
	var LoginCheck = (function () {
	    function LoginCheck() {
	    }
	    //
	    LoginCheck.checkLoginName = function (sUserNmae) {
	        var isError = false, info = "";
	        if (sUserNmae.trim().length <= 0) {
	            isError = true;
	            info = "登录名不能为空!";
	        }
	        return {
	            isError: isError,
	            info: info
	        };
	    };
	    LoginCheck.checkPassword = function (sPassowrd) {
	        var isError = false, info = "";
	        if (sPassowrd.trim().length <= 0) {
	            isError = true;
	            info = "密码不能为空!";
	        }
	        return {
	            isError: isError,
	            info: info
	        };
	    };
	    LoginCheck.checkVerificationCode = function (sVerificationCode) {
	        var isError = false, info = "";
	        if (sVerificationCode.trim().length <= 0) {
	            isError = true;
	            info = "验证码不能为空!";
	        }
	        return {
	            isError: isError,
	            info: info
	        };
	    };
	    return LoginCheck;
	}());
	exports.LoginCheck = LoginCheck;


/***/ }

});
//# sourceMappingURL=login.5bdd1.chunk.js.map