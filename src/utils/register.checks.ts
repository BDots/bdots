/**
 * Created by xihong.shi on 10/10/2016.
 */
export class RegisterCheck{
    //
    public static checkUserName(sUserName : string){
        let reg = /^[a-zA-Z\d]\w{3,11}[a-zA-Z\d]$/; //只能是字母（大小写敏感），数字，下划线，不能以下划线开头和结尾

        let isError = !reg.test(sUserName);
        let info = isError ? "格式不正确，可以包含英文字母,数字和下划线(_)，并且长度为3-11字符!" : "";

        return {
            isError : isError,
            info : info
        }
    }


    public static checkPassword(sPassword : string){
        let reg = /^(\w){6,20}$/; //只能输入6-20个字母、数字、下划线

        let isError = !reg.test(sPassword);
        let info = isError ? "格式不正确，只能输入6-20个字母、数字、下划线!" : "";

        return {
            isError : isError,
            info : info
        }
    }

    public static checkConfrimPassword(sPassword : string, sConfrimPassword : string){
        let  isError = false, info = "";

        if(sPassword !== sConfrimPassword || sConfrimPassword.length <= 0){
            isError = true;
            info = "密码输入不一致，重新输入!";
        }

        return {
            isError : isError,
            info : info
        }
    }

    public  static checkEmail(sEmail : string){
        let reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/; //开始必须是一个或者多个单词字符或者是-，加上@，然后又是一个或者多个单词字符或者是-。然后是点“.”和单词字符和-的组合，可以有一个或者多个组合。

        let isError = !reg.test(sEmail);
        let info = isError ? "Email格式不正确" : "";

        return {
            isError : isError,
            info : info
        }
    }

    public static checkVerification(sVerification : string, sResult : string){
        let  isError = false, info = "";

        if(sVerification.toLowerCase() !== sResult.toLowerCase() || sVerification.length <= 0){
            isError = true;
            info = "验证码输入不正确!";
        }

        return {
            isError : isError,
            info : info
        }
    }

    public static checkPhoneNumber(sPhoneNumber : string){
        let reg = /^1\d{10}$/; //手机号码,以1开头。

        let isError = !reg.test(sPhoneNumber);
        let info = isError ? "手机号码输入不正确" : "";

        return {
            isError : isError,
            info : info
        }
    }

    public static checkPhoneCode(sPhoneCode : string, sResult : string){
        let  isError = false, info = "";

        if(sPhoneCode !== sResult || sPhoneCode.length <= 0){
            isError = true;
            info = "短信验证码输入不正确!";
        }

        return {
            isError : isError,
            info : info
        }
    }
}