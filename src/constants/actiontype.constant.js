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
