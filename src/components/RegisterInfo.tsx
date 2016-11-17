import * as React from "react";
import { Link } from 'react-router';

import { Utils } from '../utils/Utils';

import { ActionType } from "../constants/actiontype.constant";


@Utils.subscribeToStore()
export class RegisterInfo extends React.Component<any, any>{

    onUserNameCheck = (text : string) =>{
        this.props.store.dispatch({ type: ActionType.UserNameCheck, text});
    }

    onSetUserName = (text : string) =>{
        this.props.store.dispatch({ type: ActionType.SetUserName, text});
    }

    onPasswordCheck = (text : string) =>{
        this.props.store.dispatch({ type: ActionType.PasswordCheck, text});
    }

    onSetPassword = (text : string) =>{
        this.props.store.dispatch({ type: ActionType.SetPassword, text});
    }

    onConfirmPassowrdCheck = (text : string) =>{
        this.props.store.dispatch({ type: ActionType.ConfirmPasswordCheck, text});
    }

    onSetConfirmPassword = (text : string) =>{
        this.props.store.dispatch({ type: ActionType.SetConfirmPassword, text});
    }

    onEmailCheck = (text : string) =>{
        this.props.store.dispatch({ type: ActionType.EmailCheck, text});
    }

    onSetEmail = (text : string) =>{
        this.props.store.dispatch({ type: ActionType.SetEmail, text});
    }

    onVerificationCheck = (text : string) =>{
        this.props.store.dispatch({ type: ActionType.VerificationCheck, text});
    }

    onSetVerification = (text : string) =>{
        this.props.store.dispatch({ type: ActionType.SetVerification, text});
    }

    onDealSelect = (text : string) =>{
        this.props.store.dispatch({ type: ActionType.DealSelect, text});
    }


    onSubmitData = (event : any) =>{
        if(!Utils.stringIsNullOrEmpty(this.props.store.getState().userName) &&
            !this.props.store.getState().userNameError &&
            !Utils.stringIsNullOrEmpty(this.props.store.getState().password) &&
            !this.props.store.getState().passwordError &&
            !Utils.stringIsNullOrEmpty(this.props.store.getState().confirmPassword) &&
            !this.props.store.getState().confirmPasswordError &&
            !Utils.stringIsNullOrEmpty(this.props.store.getState().email) &&
            !this.props.store.getState().emailError &&
            !Utils.stringIsNullOrEmpty(this.props.store.getState().verification) &&
            !this.props.store.getState().verificationError ){

            //submit data and jump next step

            this.props.store.dispatch({ type: ActionType.SubmitInfoData});

        }else{
            this.onUserNameCheck(this.props.store.getState().userName);
            this.onPasswordCheck(this.props.store.getState().password);
            this.onConfirmPassowrdCheck(this.props.store.getState().confirmPassword);
            this.onEmailCheck(this.props.store.getState().email);
            this.onVerificationCheck(this.props.store.getState().verification);
        }
    }


    render(){
        return (
            <div>
                <div className="form-content col-md-12" >
                    <div className="col-md-8 col-md-offset-2">
                        <div className="form-group">
                            <label className="form-text">用户名：</label>
                            <input type="text" placeholder="可以包含英文字母，数字和下划线(_)"
                                   className={this.props.store.getState().userNameError ? "form-control error-border" : "form-control"}
                                   onBlur={ e => this.onUserNameCheck(e.target.value) }
                                   onChange={e => this.onSetUserName(e.target.value) }
                                   value={ this.props.store.getState().userName } />
                            <label className="tf-error" style={{display:this.props.store.getState().userNameError ? "block" : "none"}}>
                                {this.props.store.getState().userNameErrorInfo}
                            </label>
                        </div>
                        <div className="form-group">
                            <label className="form-text" >密码：</label>
                            <input type="password" placeholder="只能输入6-20个字母、数字、下划线"
                                   className={this.props.store.getState().passwordError ? "form-control error-border" : "form-control"}
                                   onBlur={ e => this.onPasswordCheck(e.target.value)}
                                   onChange={e => this.onSetPassword(e.target.value) }
                                   value={ this.props.store.getState().password } />
                            <label className="tf-error" style={{display:this.props.store.getState().passwordError ? "block" : "none"}}>
                                { this.props.store.getState().passwordErrorInfo }
                            </label>
                        </div>
                        <div className="form-group">
                            <label className="form-text" >确认密码：</label>
                            <input type="password" placeholder="请再次输入密码"
                                   className={this.props.store.getState().confirmPasswordError ? "form-control error-border" : "form-control"}
                                   onBlur={ e => this.onConfirmPassowrdCheck(e.target.value)}
                                   onChange={e => this.onSetConfirmPassword(e.target.value) }
                                   value={ this.props.store.getState().confirmPassword } />
                            <label className="tf-error" style={{display:this.props.store.getState().confirmPasswordError ? "block" : "none"}}>
                                { this.props.store.getState().confirmPasswordErrorInfo }
                            </label>
                        </div>
                        <div className="form-group">
                            <label className="form-text" >邮箱地址：</label>
                            <input type="text" placeholder="请输入Email地址"
                                   className={this.props.store.getState().emailError ? "form-control error-border" : "form-control"}
                                   onBlur={ e => this.onEmailCheck(e.target.value)}
                                   onChange={e => this.onSetEmail(e.target.value) }
                                   value={ this.props.store.getState().email }  />
                            <label className="tf-error" style={{display:this.props.store.getState().emailError ? "block" : "none"}}>
                                { this.props.store.getState().emailErrorInfo }
                            </label>
                        </div>
                        <div className="form-group">
                            <label className="form-text" >验证码：</label>
                            <div className={this.props.store.getState().verificationError ? "verification-code div-border error-border" : "verification-code div-border"} >
                                <input type="text" placeholder="请输入右边图中的字符"
                                       className="form-control"
                                       onBlur={ e => this.onVerificationCheck(e.target.value)}
                                       onChange={e => this.onSetVerification(e.target.value) }
                                       value={ this.props.store.getState().verification } />
                                <div className="verification-img"><img src={this.props.store.getState().verificationImgUrl} /></div>
                            </div>

                            <label className="tf-error" style={{display:this.props.store.getState().verificationError ? "block" : "none"}}>
                                { this.props.store.getState().verificationErrorInfo }
                            </label>
                        </div>
                        <div className="form-group">
                            <button type="button" className="btn" onClick={ e => this.onSubmitData(e) }>立即注册</button>
                            <div className="loginlink">
                                <div className="form-group left">
                                    <input type="checkbox" defaultChecked="checked"
                                    onChange={e => this.onDealSelect(e.target.value) }/>我已阅读
                                    <a href="###">会员注册协议</a>
                                </div>
                                <div className="right">
                                    已有账号？<Link to="/login">去登录</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

