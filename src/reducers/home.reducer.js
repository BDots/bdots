"use strict";
var actiontype_constant_1 = require("../constants/actiontype.constant");
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
