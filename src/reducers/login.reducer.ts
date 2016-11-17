import { ActionType }  from "../constants/actiontype.constant";
import { LoginCheck } from "../utils/login.checks";


export class LoginReducers{

    private static initState : any = {
        loginName : "",
        password : "",
        verification : "",
        loginNameError: false ,
        loginNameErrorInfo: "",
        passwordError: false,
        passwordErrorInfo: "",
        verificationError: false,
        verificationErrorInfo: "",
        verificationImgUrl : "src/images/VerifyCode.png"
    }

    public static LoginReducer(state : any, action : any){
        switch (action.type){
            case ActionType.Init:
                return Object.assign({}, state, LoginReducers.initState);

            //check user name
            case ActionType.LoginNameCheck :
                let oCheck = LoginCheck.checkLoginName(action.text);
                return Object.assign({}, state,{
                    loginNameError : oCheck.isError ,
                    loginNameErrorInfo : oCheck.info
                });
            //set user name
            case ActionType.SetLoginName :
                return Object.assign({}, state, {
                    loginName : action.text
                })
            //check password
            case ActionType.PasswordCheck :
                let oCheck = LoginCheck.checkPassword(action.text);
                return Object.assign({}, state,{
                    passwordError : oCheck.isError ,
                    passwordErrorInfo : oCheck.info
                });
            //set password
            case ActionType.SetPassword :
                return Object.assign({}, state, {
                    password : action.text
                })
            //check verification
            case ActionType.VerificationCheck :
                let oCheck = LoginCheck.checkVerificationCode(action.text, "mste");
                return Object.assign({}, state,{
                    verificationError : oCheck.isError ,
                    verificationErrorInfo : oCheck.info
                });
            //set verification
            case ActionType.SetVerification :
                return Object.assign({}, state, {
                    verification : action.text
                })
            default:
                return state;
        }
    }




}