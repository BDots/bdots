/**
 * Created by xihong.shi on 10/10/2016.
 */
export class LoginCheck{
    //
    public static checkLoginName(sUserNmae : string){
        let  isError = false, info = "";

        if(sUserNmae.trim().length <= 0){
            isError = true;
            info = "登录名不能为空!";
        }

        return {
            isError : isError,
            info : info
        }
    }

    public static checkPassword(sPassowrd : string){
        let  isError = false, info = "";

        if(sPassowrd.trim().length <= 0){
            isError = true;
            info = "密码不能为空!";
        }

        return {
            isError : isError,
            info : info
        }
    }

    public static checkVerificationCode(sVerificationCode : string){
        let  isError = false, info = "";

        if(sVerificationCode.trim().length <= 0){
            isError = true;
            info = "验证码不能为空!";
        }

        return {
            isError : isError,
            info : info
        }
    }
}