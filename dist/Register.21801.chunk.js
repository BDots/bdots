webpackJsonp([2],{

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

/***/ 283:
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
	var react_redux_1 = __webpack_require__(258);
	var redux_1 = __webpack_require__(237);
	var Utils_1 = __webpack_require__(278);
	var RegisterStepBar_1 = __webpack_require__(284);
	var RegisterInfo_1 = __webpack_require__(285);
	var RegisterAccountValidation_1 = __webpack_require__(286);
	var RegisterFinish_1 = __webpack_require__(287);
	var register_reducer_1 = __webpack_require__(288);
	var defultInitState = {
	    registerSetp: 1,
	    userName: "",
	    password: "",
	    confirmPassword: "",
	    email: "",
	    verification: "",
	    userNameError: false,
	    userNameErrorInfo: "",
	    passwordError: false,
	    passwordErrorInfo: "",
	    confirmPasswordError: false,
	    confirmPasswordErrorInfo: "",
	    emailError: false,
	    emailErrorInfo: "",
	    verificationError: false,
	    verificationErrorInfo: "",
	    verificationImgUrl: "src/images/VerifyCode.png",
	    userNickName: "",
	    userNickNameError: false,
	    userNickNmaeErrorInfo: "",
	    userPhone: "",
	    userPhoneError: false,
	    userPhoneErrorInfo: "",
	    phoneCode: "",
	    phoneCodeError: false,
	    phoneCodeErrorInfo: "",
	    phoneCodeCountdown: 0,
	    isSendPhoneCode: false
	};
	var store = redux_1.createStore(register_reducer_1.RegisterReducers.RegisterReducer, defultInitState);
	var locationKey;
	var Register = (function (_super) {
	    __extends(Register, _super);
	    function Register() {
	        _super.apply(this, arguments);
	    }
	    Register.prototype.componentWillReceiveProps = function () {
	    };
	    Register.prototype.render = function () {
	        if (locationKey !== this.props.location.key) {
	            store.dispatch({ type: "INIT" });
	            locationKey = this.props.location.key;
	        }
	        var registerStepComponent;
	        var registerStep = store.getState().registerSetp;
	        if (registerStep === 1) {
	            registerStepComponent = React.createElement(RegisterInfo_1.RegisterInfo, {store: store});
	        }
	        else if (registerStep === 2) {
	            registerStepComponent = React.createElement(RegisterAccountValidation_1.RegisterAccountValidation, {store: store});
	        }
	        else if (registerStep === 3) {
	            registerStepComponent = React.createElement(RegisterFinish_1.RegisterFinish, {store: store});
	        }
	        return (React.createElement(react_redux_1.Provider, {store: store}, 
	            React.createElement("div", {className: "content main page register"}, 
	                React.createElement("div", {className: "row"}, 
	                    React.createElement("div", {className: "form-box"}, 
	                        React.createElement(RegisterStepBar_1.RegisterStepBar, {activeindex: store.getState().registerSetp}), 
	                        registerStepComponent)
	                )
	            )
	        ));
	    };
	    Register = __decorate([
	        Utils_1.Utils.subscribeToParentStore(store)
	    ], Register);
	    return Register;
	}(React.Component));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Register;


/***/ },

/***/ 284:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var RegisterStepBar = (function (_super) {
	    __extends(RegisterStepBar, _super);
	    function RegisterStepBar() {
	        _super.apply(this, arguments);
	    }
	    RegisterStepBar.prototype.render = function () {
	        return (React.createElement("div", {className: "form-header col-md-12"}, 
	            React.createElement("div", {className: this.props.activeindex == "1" || this.props.activeindex == "2" || this.props.activeindex == "3" ? "col-md-4 active" : "col-md-4"}, 
	                React.createElement("h1", null, 
	                    React.createElement("i", null, "1"), 
	                    "填写注册信息")
	            ), 
	            React.createElement("div", {className: this.props.activeindex == "2" || this.props.activeindex == "3" ? "col-md-4 active" : "col-md-4"}, 
	                React.createElement("h1", null, 
	                    React.createElement("i", null, "2"), 
	                    "账号验证")
	            ), 
	            React.createElement("div", {className: this.props.activeindex == "3" ? "col-md-4 active" : "col-md-4"}, 
	                React.createElement("h1", null, 
	                    React.createElement("i", null, "3"), 
	                    "注册完成")
	            )));
	    };
	    return RegisterStepBar;
	}(React.Component));
	exports.RegisterStepBar = RegisterStepBar;


/***/ },

/***/ 285:
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
	var RegisterInfo = (function (_super) {
	    __extends(RegisterInfo, _super);
	    function RegisterInfo() {
	        var _this = this;
	        _super.apply(this, arguments);
	        this.onUserNameCheck = function (text) {
	            _this.props.store.dispatch({ type: actiontype_constant_1.ActionType.UserNameCheck, text: text });
	        };
	        this.onSetUserName = function (text) {
	            _this.props.store.dispatch({ type: actiontype_constant_1.ActionType.SetUserName, text: text });
	        };
	        this.onPasswordCheck = function (text) {
	            _this.props.store.dispatch({ type: actiontype_constant_1.ActionType.PasswordCheck, text: text });
	        };
	        this.onSetPassword = function (text) {
	            _this.props.store.dispatch({ type: actiontype_constant_1.ActionType.SetPassword, text: text });
	        };
	        this.onConfirmPassowrdCheck = function (text) {
	            _this.props.store.dispatch({ type: actiontype_constant_1.ActionType.ConfirmPasswordCheck, text: text });
	        };
	        this.onSetConfirmPassword = function (text) {
	            _this.props.store.dispatch({ type: actiontype_constant_1.ActionType.SetConfirmPassword, text: text });
	        };
	        this.onEmailCheck = function (text) {
	            _this.props.store.dispatch({ type: actiontype_constant_1.ActionType.EmailCheck, text: text });
	        };
	        this.onSetEmail = function (text) {
	            _this.props.store.dispatch({ type: actiontype_constant_1.ActionType.SetEmail, text: text });
	        };
	        this.onVerificationCheck = function (text) {
	            _this.props.store.dispatch({ type: actiontype_constant_1.ActionType.VerificationCheck, text: text });
	        };
	        this.onSetVerification = function (text) {
	            _this.props.store.dispatch({ type: actiontype_constant_1.ActionType.SetVerification, text: text });
	        };
	        this.onDealSelect = function (text) {
	            _this.props.store.dispatch({ type: actiontype_constant_1.ActionType.DealSelect, text: text });
	        };
	        this.onSubmitData = function (event) {
	            if (!Utils_1.Utils.stringIsNullOrEmpty(_this.props.store.getState().userName) &&
	                !_this.props.store.getState().userNameError &&
	                !Utils_1.Utils.stringIsNullOrEmpty(_this.props.store.getState().password) &&
	                !_this.props.store.getState().passwordError &&
	                !Utils_1.Utils.stringIsNullOrEmpty(_this.props.store.getState().confirmPassword) &&
	                !_this.props.store.getState().confirmPasswordError &&
	                !Utils_1.Utils.stringIsNullOrEmpty(_this.props.store.getState().email) &&
	                !_this.props.store.getState().emailError &&
	                !Utils_1.Utils.stringIsNullOrEmpty(_this.props.store.getState().verification) &&
	                !_this.props.store.getState().verificationError) {
	                //submit data and jump next step
	                _this.props.store.dispatch({ type: actiontype_constant_1.ActionType.SubmitInfoData });
	            }
	            else {
	                _this.onUserNameCheck(_this.props.store.getState().userName);
	                _this.onPasswordCheck(_this.props.store.getState().password);
	                _this.onConfirmPassowrdCheck(_this.props.store.getState().confirmPassword);
	                _this.onEmailCheck(_this.props.store.getState().email);
	                _this.onVerificationCheck(_this.props.store.getState().verification);
	            }
	        };
	    }
	    RegisterInfo.prototype.render = function () {
	        var _this = this;
	        return (React.createElement("div", null, 
	            React.createElement("div", {className: "form-content col-md-12"}, 
	                React.createElement("div", {className: "col-md-8 col-md-offset-2"}, 
	                    React.createElement("div", {className: "form-group"}, 
	                        React.createElement("label", {className: "form-text"}, "用户名："), 
	                        React.createElement("input", {type: "text", placeholder: "可以包含英文字母，数字和下划线(_)", className: this.props.store.getState().userNameError ? "form-control error-border" : "form-control", onBlur: function (e) { return _this.onUserNameCheck(e.target.value); }, onChange: function (e) { return _this.onSetUserName(e.target.value); }, value: this.props.store.getState().userName}), 
	                        React.createElement("label", {className: "tf-error", style: { display: this.props.store.getState().userNameError ? "block" : "none" }}, this.props.store.getState().userNameErrorInfo)), 
	                    React.createElement("div", {className: "form-group"}, 
	                        React.createElement("label", {className: "form-text"}, "密码："), 
	                        React.createElement("input", {type: "password", placeholder: "只能输入6-20个字母、数字、下划线", className: this.props.store.getState().passwordError ? "form-control error-border" : "form-control", onBlur: function (e) { return _this.onPasswordCheck(e.target.value); }, onChange: function (e) { return _this.onSetPassword(e.target.value); }, value: this.props.store.getState().password}), 
	                        React.createElement("label", {className: "tf-error", style: { display: this.props.store.getState().passwordError ? "block" : "none" }}, this.props.store.getState().passwordErrorInfo)), 
	                    React.createElement("div", {className: "form-group"}, 
	                        React.createElement("label", {className: "form-text"}, "确认密码："), 
	                        React.createElement("input", {type: "password", placeholder: "请再次输入密码", className: this.props.store.getState().confirmPasswordError ? "form-control error-border" : "form-control", onBlur: function (e) { return _this.onConfirmPassowrdCheck(e.target.value); }, onChange: function (e) { return _this.onSetConfirmPassword(e.target.value); }, value: this.props.store.getState().confirmPassword}), 
	                        React.createElement("label", {className: "tf-error", style: { display: this.props.store.getState().confirmPasswordError ? "block" : "none" }}, this.props.store.getState().confirmPasswordErrorInfo)), 
	                    React.createElement("div", {className: "form-group"}, 
	                        React.createElement("label", {className: "form-text"}, "邮箱地址："), 
	                        React.createElement("input", {type: "text", placeholder: "请输入Email地址", className: this.props.store.getState().emailError ? "form-control error-border" : "form-control", onBlur: function (e) { return _this.onEmailCheck(e.target.value); }, onChange: function (e) { return _this.onSetEmail(e.target.value); }, value: this.props.store.getState().email}), 
	                        React.createElement("label", {className: "tf-error", style: { display: this.props.store.getState().emailError ? "block" : "none" }}, this.props.store.getState().emailErrorInfo)), 
	                    React.createElement("div", {className: "form-group"}, 
	                        React.createElement("label", {className: "form-text"}, "验证码："), 
	                        React.createElement("div", {className: this.props.store.getState().verificationError ? "verification-code div-border error-border" : "verification-code div-border"}, 
	                            React.createElement("input", {type: "text", placeholder: "请输入右边图中的字符", className: "form-control", onBlur: function (e) { return _this.onVerificationCheck(e.target.value); }, onChange: function (e) { return _this.onSetVerification(e.target.value); }, value: this.props.store.getState().verification}), 
	                            React.createElement("div", {className: "verification-img"}, 
	                                React.createElement("img", {src: this.props.store.getState().verificationImgUrl})
	                            )), 
	                        React.createElement("label", {className: "tf-error", style: { display: this.props.store.getState().verificationError ? "block" : "none" }}, this.props.store.getState().verificationErrorInfo)), 
	                    React.createElement("div", {className: "form-group"}, 
	                        React.createElement("button", {type: "button", className: "btn", onClick: function (e) { return _this.onSubmitData(e); }}, "立即注册"), 
	                        React.createElement("div", {className: "loginlink"}, 
	                            React.createElement("div", {className: "form-group left"}, 
	                                React.createElement("input", {type: "checkbox", defaultChecked: "checked", onChange: function (e) { return _this.onDealSelect(e.target.value); }}), 
	                                "我已阅读", 
	                                React.createElement("a", {href: "###"}, "会员注册协议")), 
	                            React.createElement("div", {className: "right"}, 
	                                "已有账号？", 
	                                React.createElement(react_router_1.Link, {to: "/login"}, "去登录")))))
	            )
	        ));
	    };
	    RegisterInfo = __decorate([
	        Utils_1.Utils.subscribeToStore()
	    ], RegisterInfo);
	    return RegisterInfo;
	}(React.Component));
	exports.RegisterInfo = RegisterInfo;


/***/ },

/***/ 286:
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
	var Utils_1 = __webpack_require__(278);
	var actiontype_constant_1 = __webpack_require__(279);
	/// <reference path="../interfaces/register.interface.d.ts"/>
	var RegisterAccountValidation = (function (_super) {
	    __extends(RegisterAccountValidation, _super);
	    function RegisterAccountValidation() {
	        var _this = this;
	        _super.apply(this, arguments);
	        this.onUserPhoneCheck = function (text) {
	            _this.props.store.dispatch({ type: actiontype_constant_1.ActionType.UserPhoneCheck, text: text });
	        };
	        this.onSetUserPhone = function (text) {
	            _this.props.store.dispatch({ type: actiontype_constant_1.ActionType.SetUserPhone, text: text });
	        };
	        this.onPhoneCodeCheck = function (text) {
	            _this.props.store.dispatch({ type: actiontype_constant_1.ActionType.PhoneCodeCheck, text: text });
	        };
	        this.onSetPhoneCode = function (text) {
	            _this.props.store.dispatch({ type: actiontype_constant_1.ActionType.SetPhoneCode, text: text });
	        };
	        this.onSendPhoneCode = function (event) {
	            _this.onUserPhoneCheck(_this.props.store.getState().userPhone);
	            _this.props.store.dispatch({ type: actiontype_constant_1.ActionType.SendPhoneCode });
	        };
	        this.onSubmitData = function (event) {
	            if (!Utils_1.Utils.stringIsNullOrEmpty(_this.props.store.getState().userPhone) &&
	                !_this.props.store.getState().userPhoneError &&
	                !Utils_1.Utils.stringIsNullOrEmpty(_this.props.store.getState().phoneCode) &&
	                !_this.props.store.getState().phoneCodeError) {
	                //submit data and jump next step
	                _this.props.store.dispatch({ type: actiontype_constant_1.ActionType.SubmitSupplementaryInfoData });
	            }
	            else {
	                _this.onUserPhoneCheck(_this.props.store.getState().userPhone);
	                _this.onPhoneCodeCheck(_this.props.store.getState().phoneCode);
	            }
	        };
	    }
	    RegisterAccountValidation.prototype.render = function () {
	        var _this = this;
	        return (React.createElement("div", {className: "form-content col-md-12"}, 
	            React.createElement("div", {className: "col-md-8 col-md-offset-2"}, 
	                React.createElement("div", {className: "form-group"}, 
	                    React.createElement("label", {className: "form-text"}, "手机号码（必填）："), 
	                    React.createElement("div", {className: this.props.store.getState().userPhoneError ? "phone-number div-border error-border" : "phone-number div-border"}, 
	                        React.createElement("input", {type: "text", placeholder: "请输入手机号码", className: "form-control", onBlur: function (e) { return _this.onUserPhoneCheck(e.target.value); }, onChange: function (e) { return _this.onSetUserPhone(e.target.value); }, value: this.props.store.getState().userPhone}), 
	                        React.createElement("button", {type: "button", className: "btn send-btn", onClick: function (e) { return _this.onSendPhoneCode(e); }, disabled: this.props.store.getState().userPhoneError || this.props.store.getState().phoneCodeCountdown != 0 ? "disabled" : ""}, "点击发送验证码")), 
	                    React.createElement("label", {className: "tf-error", style: { display: this.props.store.getState().userPhoneError ? "block" : "none" }}, this.props.store.getState().userPhoneErrorInfo)), 
	                React.createElement("div", {className: "form-group"}, 
	                    React.createElement("label", {className: "form-text"}, "验证码："), 
	                    React.createElement("input", {type: "text", placeholder: "请输入手机接收到的验证码", className: this.props.store.getState().phoneCodeError ? "form-control error-border" : "form-control", onBlur: function (e) { return _this.onPhoneCodeCheck(e.target.value); }, onChange: function (e) { return _this.onSetPhoneCode(e.target.value); }, value: this.props.store.getState().phoneCode}), 
	                    React.createElement("label", {className: "tf-error", style: { display: this.props.store.getState().phoneCodeError ? "block" : "none" }}, this.props.store.getState().phoneCodeErrorInfo)), 
	                React.createElement("div", {className: "form-group"}, 
	                    React.createElement("button", {type: "button", className: "btn", onClick: function (e) { return _this.onSubmitData(e); }}, "立即提交")
	                ))
	        ));
	    };
	    RegisterAccountValidation = __decorate([
	        Utils_1.Utils.subscribeToStore()
	    ], RegisterAccountValidation);
	    return RegisterAccountValidation;
	}(React.Component));
	exports.RegisterAccountValidation = RegisterAccountValidation;


/***/ },

/***/ 287:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var react_router_1 = __webpack_require__(172);
	var RegisterFinish = (function (_super) {
	    __extends(RegisterFinish, _super);
	    function RegisterFinish() {
	        _super.apply(this, arguments);
	    }
	    RegisterFinish.prototype.render = function () {
	        return (React.createElement("div", {className: "register-finish"}, 
	            React.createElement("h1", null, "恭喜您注册成功，您可以选择用户名，手机号，或者邮箱账号，作为您的登录凭证。"), 
	            React.createElement("p", null, "推荐您进行下面的操作："), 
	            React.createElement("ul", null, 
	                React.createElement("li", null, 
	                    React.createElement(react_router_1.Link, {to: "/"}, "补填个人资料")
	                ), 
	                React.createElement("li", null, 
	                    React.createElement(react_router_1.Link, {to: "/"}, "设置账号安全")
	                ), 
	                React.createElement("li", null, 
	                    React.createElement(react_router_1.Link, {to: "/"}, "进入个人中心")
	                ), 
	                React.createElement("li", null, 
	                    React.createElement(react_router_1.Link, {to: "/"}, "浏览站点导航")
	                ), 
	                React.createElement("li", null, 
	                    React.createElement(react_router_1.Link, {to: "/"}, "站点帮助")
	                ), 
	                React.createElement("li", null, 
	                    React.createElement(react_router_1.Link, {to: "/login"}, "登录"), 
	                    "或者", 
	                    React.createElement(react_router_1.Link, {to: "/"}, "返回首页")))));
	    };
	    return RegisterFinish;
	}(React.Component));
	exports.RegisterFinish = RegisterFinish;


/***/ },

/***/ 288:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var actiontype_constant_1 = __webpack_require__(279);
	var register_checks_1 = __webpack_require__(289);
	var RegisterReducers = (function () {
	    function RegisterReducers() {
	    }
	    RegisterReducers.RegisterReducer = function (state, action) {
	        switch (action.type) {
	            case "INIT":
	                return Object.assign({}, state, RegisterReducers.initState);
	            //check user name
	            case actiontype_constant_1.ActionType.UserNameCheck:
	                var oCheck = register_checks_1.RegisterCheck.checkUserName(action.text);
	                return Object.assign({}, state, {
	                    userNameError: oCheck.isError,
	                    userNameErrorInfo: oCheck.info
	                });
	            //set user name
	            case actiontype_constant_1.ActionType.SetUserName:
	                return Object.assign({}, state, {
	                    userName: action.text
	                });
	            //check password
	            case actiontype_constant_1.ActionType.PasswordCheck:
	                var oCheck = register_checks_1.RegisterCheck.checkPassword(action.text);
	                return Object.assign({}, state, {
	                    passwordError: oCheck.isError,
	                    passwordErrorInfo: oCheck.info
	                });
	            //set password
	            case actiontype_constant_1.ActionType.SetPassword:
	                return Object.assign({}, state, {
	                    password: action.text
	                });
	            //check confrim password
	            case actiontype_constant_1.ActionType.ConfirmPasswordCheck:
	                var oCheck = register_checks_1.RegisterCheck.checkConfrimPassword(state.password, action.text);
	                return Object.assign({}, state, {
	                    confirmPasswordError: oCheck.isError,
	                    confirmPasswordErrorInfo: oCheck.info
	                });
	            //set confrim password
	            case actiontype_constant_1.ActionType.SetConfirmPassword:
	                return Object.assign({}, state, {
	                    confirmPassword: action.text
	                });
	            //check email
	            case actiontype_constant_1.ActionType.EmailCheck:
	                var oCheck = register_checks_1.RegisterCheck.checkEmail(action.text);
	                return Object.assign({}, state, {
	                    emailError: oCheck.isError,
	                    emailErrorInfo: oCheck.info
	                });
	            //set email
	            case actiontype_constant_1.ActionType.SetEmail:
	                return Object.assign({}, state, {
	                    email: action.text
	                });
	            //check verification
	            case actiontype_constant_1.ActionType.VerificationCheck:
	                var oCheck = register_checks_1.RegisterCheck.checkVerification(action.text, "mste");
	                return Object.assign({}, state, {
	                    verificationError: oCheck.isError,
	                    verificationErrorInfo: oCheck.info
	                });
	            //set verification
	            case actiontype_constant_1.ActionType.SetVerification:
	                return Object.assign({}, state, {
	                    verification: action.text
	                });
	            //set verification
	            case actiontype_constant_1.ActionType.SubmitInfoData:
	                return Object.assign({}, state, {
	                    registerSetp: 2
	                });
	            //set verification
	            case actiontype_constant_1.ActionType.DealSelect:
	                return Object.assign({}, state, {
	                    dealIsSelect: action.text == "on" ? true : false
	                });
	            //check phone number
	            case actiontype_constant_1.ActionType.UserPhoneCheck:
	                var oCheck = register_checks_1.RegisterCheck.checkPhoneNumber(action.text);
	                return Object.assign({}, state, {
	                    userPhone: action.text,
	                    userPhoneError: oCheck.isError,
	                    userPhoneErrorInfo: oCheck.info
	                });
	            //set phone number
	            case actiontype_constant_1.ActionType.SetUserPhone:
	                return Object.assign({}, state, {
	                    userPhone: action.text
	                });
	            //check phone code
	            case actiontype_constant_1.ActionType.PhoneCodeCheck:
	                var oCheck = register_checks_1.RegisterCheck.checkPhoneCode(action.text, "123456");
	                return Object.assign({}, state, {
	                    phoneCodeError: oCheck.isError,
	                    phoneCodeErrorInfo: oCheck.info
	                });
	            //set phone code
	            case actiontype_constant_1.ActionType.SetPhoneCode:
	                return Object.assign({}, state, {
	                    phoneCode: action.text
	                });
	            //set phone code
	            case actiontype_constant_1.ActionType.SendPhoneCode:
	                return Object.assign({}, state, {
	                    isSendPhoneCode: !state.userPhoneError && phoneCodeCountdown == 0 ? true : false
	                });
	            //set verification
	            case actiontype_constant_1.ActionType.SubmitSupplementaryInfoData:
	                return Object.assign({}, state, {
	                    registerSetp: 3
	                });
	            default:
	                return state;
	        }
	    };
	    RegisterReducers.initState = {
	        registerSetp: 1,
	        userName: "",
	        password: "",
	        confirmPassword: "",
	        email: "",
	        verification: "",
	        userNameError: false,
	        userNameErrorInfo: "",
	        passwordError: false,
	        passwordErrorInfo: "",
	        confirmPasswordError: false,
	        confirmPasswordErrorInfo: "",
	        emailError: false,
	        emailErrorInfo: "",
	        verificationImgUrl: "src/images/VerifyCode.png",
	        verificationError: false,
	        verificationErrorInfo: "",
	        userNickName: "",
	        userNickNameError: false,
	        userNickNmaeErrorInfo: "",
	        userPhone: "",
	        userPhoneError: false,
	        userPhoneErrorInfo: "",
	        phoneCode: "",
	        phoneCodeError: false,
	        phoneCodeErrorInfo: "",
	        phoneCodeCountdown: 0,
	        isSendPhoneCode: false
	    };
	    return RegisterReducers;
	}());
	exports.RegisterReducers = RegisterReducers;


/***/ },

/***/ 289:
/***/ function(module, exports) {

	"use strict";
	/**
	 * Created by xihong.shi on 10/10/2016.
	 */
	var RegisterCheck = (function () {
	    function RegisterCheck() {
	    }
	    //
	    RegisterCheck.checkUserName = function (sUserName) {
	        var reg = /^[a-zA-Z\d]\w{3,11}[a-zA-Z\d]$/; //只能是字母（大小写敏感），数字，下划线，不能以下划线开头和结尾
	        var isError = !reg.test(sUserName);
	        var info = isError ? "格式不正确，可以包含英文字母,数字和下划线(_)，并且长度为3-11字符!" : "";
	        return {
	            isError: isError,
	            info: info
	        };
	    };
	    RegisterCheck.checkPassword = function (sPassword) {
	        var reg = /^(\w){6,20}$/; //只能输入6-20个字母、数字、下划线
	        var isError = !reg.test(sPassword);
	        var info = isError ? "格式不正确，只能输入6-20个字母、数字、下划线!" : "";
	        return {
	            isError: isError,
	            info: info
	        };
	    };
	    RegisterCheck.checkConfrimPassword = function (sPassword, sConfrimPassword) {
	        var isError = false, info = "";
	        if (sPassword !== sConfrimPassword || sConfrimPassword.length <= 0) {
	            isError = true;
	            info = "密码输入不一致，重新输入!";
	        }
	        return {
	            isError: isError,
	            info: info
	        };
	    };
	    RegisterCheck.checkEmail = function (sEmail) {
	        var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/; //开始必须是一个或者多个单词字符或者是-，加上@，然后又是一个或者多个单词字符或者是-。然后是点“.”和单词字符和-的组合，可以有一个或者多个组合。
	        var isError = !reg.test(sEmail);
	        var info = isError ? "Email格式不正确" : "";
	        return {
	            isError: isError,
	            info: info
	        };
	    };
	    RegisterCheck.checkVerification = function (sVerification, sResult) {
	        var isError = false, info = "";
	        if (sVerification.toLowerCase() !== sResult.toLowerCase() || sVerification.length <= 0) {
	            isError = true;
	            info = "验证码输入不正确!";
	        }
	        return {
	            isError: isError,
	            info: info
	        };
	    };
	    RegisterCheck.checkPhoneNumber = function (sPhoneNumber) {
	        var reg = /^1\d{10}$/; //手机号码,以1开头。
	        var isError = !reg.test(sPhoneNumber);
	        var info = isError ? "手机号码输入不正确" : "";
	        return {
	            isError: isError,
	            info: info
	        };
	    };
	    RegisterCheck.checkPhoneCode = function (sPhoneCode, sResult) {
	        var isError = false, info = "";
	        if (sPhoneCode !== sResult || sPhoneCode.length <= 0) {
	            isError = true;
	            info = "短信验证码输入不正确!";
	        }
	        return {
	            isError: isError,
	            info: info
	        };
	    };
	    return RegisterCheck;
	}());
	exports.RegisterCheck = RegisterCheck;


/***/ }

});
//# sourceMappingURL=Register.21801.chunk.js.map