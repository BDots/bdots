/**
 * Created by xihong.shi on 10/10/2016.
 */

interface RegisterProps {

}

interface RegisterState {
    registerSetp ?: number,
    userName ?: string,
    password ?: string,
    confirmPassword ?: string,
    email ?: string,
    verification ?: string,
    userNameError?: boolean ,
    userNameErrorInfo?: string,
    passwordError?: boolean,
    passwordErrorInfo?: string,
    confirmPasswordError?: boolean,
    confirmPasswordErrorInfo?: string,
    emailError?: boolean,
    emailErrorInfo?: string,
    verificationError?: boolean,
    verificationErrorInfo?: string,
    verificationImgUrl ?: string,
    userNickName ?: string,
    userNickNameError ?: boolean,
    userNickNmaeErrorInfo ?: string,
    userPhone ?: string,
    userPhoneError ?: boolean,
    userPhoneErrorInfo ?: string,
    phoneCode ?: string,
    phoneCodeError ?: boolean,
    phoneCodeErrorInfo ?: string,
    phoneCodeCountdown ?: number,
    isSendPhoneCode ?: boolean
}

interface RegisterData{

}

