/**
 * Created by xihong.shi on 10/28/2016.
 */
export class ActionType{
    public static HomeLinkClick : string = "CHANGE";
    public static LockInput : string = "LOCK";

    public static Init : string = "INIT";

    //register action type
    public static UserNameCheck : string = "USER_NAME_CHECK";
    public static SetUserName : string = "SET_USER_NAME";
    public static PasswordCheck : string = "PASSWORD_CHECK";
    public static SetPassword : string = "SET_PASSWORD";
    public static ConfirmPasswordCheck : string = "CONFIRM_PASSWORD_CHECK";
    public static SetConfirmPassword : string = "SET_CONFIRM_PASSWORD";
    public static EmailCheck : string = "EMAIL_CHECK";
    public static SetEmail : string = "SET_EMAIL";
    public static VerificationCheck : string = "VERIFICATION_CHECK";
    public static SetVerification : string = "SET_VERIFICATION";
    public static SubmitInfoData : string = "SUBMIT_INFO_DATA";
    public static DealSelect : string = "DEAL_SELECT";

    public static UserNickNameCheck : string = "USER_NAME_CHECK";
    public static SetUserNickName : string = "SET_USER_NAME";
    public static UserPhoneCheck : string = "USER_PHONE_CHECK";
    public static SetUserPhone : string = "SET_USER_PHONE";
    public static PhoneCodeCheck : string = "PHONE_CODE_CHECK";
    public static SetPhoneCode : string = "SET_PHONE_CODE";
    public static SubmitSupplementaryInfoData : string = "SUBMIT_SUPPLEMENTARY_INFO_DATA";
    public static SendPhoneCode : string = "SENT_PHONE_CODE";

    //login action type
    public static LoginNameCheck : string = "LOGIN_NAME_CHECK";
    public static SetLoginName : string = "SET_USER_NAME";
    public static SubmitLoginData : string = "SUBMIT_LOGIN_DATA";
}