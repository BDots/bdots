import { ActionType }  from "../constants/actiontype.constant";
import { RegisterCheck } from "../utils/register.checks";


export class RegisterReducers{

    private static initState : any = {
        registerSetp : 1,
        userName : "",
        password : "",
        confirmPassword : "",
        email : "",
        verification : "",
        userNameError: false ,
        userNameErrorInfo: "",
        passwordError: false,
        passwordErrorInfo: "",
        confirmPasswordError: false,
        confirmPasswordErrorInfo: "",
        emailError: false,
        emailErrorInfo: "",
        verificationImgUrl : "src/images/VerifyCode.png",
        verificationError: false,
        verificationErrorInfo: "",
        userNickName : "",
        userNickNameError : false,
        userNickNmaeErrorInfo : "",
        userPhone : "",
        userPhoneError : false,
        userPhoneErrorInfo : "",
        phoneCode : "",
        phoneCodeError : false,
        phoneCodeErrorInfo : "",
        phoneCodeCountdown : 0,
        isSendPhoneCode : false
    }

    public static RegisterReducer(state : any, action : any){
        switch (action.type){
            case "INIT":
                return Object.assign({}, state, RegisterReducers.initState);

            //check user name
            case ActionType.UserNameCheck :
                let oCheck = RegisterCheck.checkUserName(action.text);
                return Object.assign({}, state,{
                    userNameError : oCheck.isError ,
                    userNameErrorInfo : oCheck.info
                });
            //set user name
            case ActionType.SetUserName :
                return Object.assign({}, state, {
                    userName : action.text
                })
            //check password
            case ActionType.PasswordCheck :
                let oCheck = RegisterCheck.checkPassword(action.text);
                return Object.assign({}, state,{
                    passwordError : oCheck.isError ,
                    passwordErrorInfo : oCheck.info
                });
            //set password
            case ActionType.SetPassword :
                return Object.assign({}, state, {
                    password : action.text
                })
            //check confrim password
            case ActionType.ConfirmPasswordCheck :
                let oCheck = RegisterCheck.checkConfrimPassword(state.password, action.text);
                return Object.assign({}, state,{
                    confirmPasswordError : oCheck.isError ,
                    confirmPasswordErrorInfo : oCheck.info
                });
            //set confrim password
            case ActionType.SetConfirmPassword :
                return Object.assign({}, state, {
                    confirmPassword : action.text
                })
            //check email
            case ActionType.EmailCheck :
                let oCheck = RegisterCheck.checkEmail(action.text);
                return Object.assign({}, state,{
                    emailError : oCheck.isError ,
                    emailErrorInfo : oCheck.info
                });
            //set email
            case ActionType.SetEmail :
                return Object.assign({}, state, {
                    email : action.text
                })
            //check verification
            case ActionType.VerificationCheck :
                let oCheck = RegisterCheck.checkVerification(action.text, "mste");
                return Object.assign({}, state,{
                    verificationError : oCheck.isError ,
                    verificationErrorInfo : oCheck.info
                });
            //set verification
            case ActionType.SetVerification :
                return Object.assign({}, state, {
                    verification : action.text
                })
            //set verification
            case ActionType.SubmitInfoData :
                return Object.assign({}, state, {
                    registerSetp : 2
                })
            //set verification
            case ActionType.DealSelect :
                return Object.assign({}, state, {
                    dealIsSelect : action.text == "on" ? true : false
                })

            //check phone number
            case ActionType.UserPhoneCheck :
                let oCheck = RegisterCheck.checkPhoneNumber(action.text);
                return Object.assign({}, state,{
                    userPhone : action.text,
                    userPhoneError : oCheck.isError ,
                    userPhoneErrorInfo : oCheck.info
                });
            //set phone number
            case ActionType.SetUserPhone :
                return Object.assign({}, state, {
                    userPhone : action.text
                })
            //check phone code
            case ActionType.PhoneCodeCheck :
                let oCheck = RegisterCheck.checkPhoneCode(action.text, "123456");
                return Object.assign({}, state,{
                    phoneCodeError : oCheck.isError ,
                    phoneCodeErrorInfo : oCheck.info
                });
            //set phone code
            case ActionType.SetPhoneCode :
                return Object.assign({}, state, {
                    phoneCode : action.text
                })

            //set phone code
            case ActionType.SendPhoneCode :
                return Object.assign({}, state, {
                    isSendPhoneCode : !state.userPhoneError && phoneCodeCountdown == 0 ? true : false
                })

            //set verification
            case ActionType.SubmitSupplementaryInfoData :
                return Object.assign({}, state, {
                    registerSetp : 3
                })
            default:
                return state;
        }
    }




}