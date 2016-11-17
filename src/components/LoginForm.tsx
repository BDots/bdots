import * as React from "react";
import { Link } from 'react-router';


import { Utils } from '../utils/Utils';
import { ActionType } from "../constants/actiontype.constant";



@Utils.subscribeToStore()
export class LoginForm extends React.Component<any, any>{

    public static contextTypes = {
        router: React.PropTypes.object,
    }

    onLoginNameCheck = (text : string) =>{
        this.props.store.dispatch({ type: ActionType.LoginNameCheck, text});
    }

    onSetLoginName = (text : string) =>{
        this.props.store.dispatch({ type: ActionType.SetLoginName, text});
    }

    onPasswordCheck = (text : string) =>{
        this.props.store.dispatch({ type: ActionType.PasswordCheck, text});
    }

    onSetPassword = (text : string) =>{
        this.props.store.dispatch({ type: ActionType.SetPassword, text});
    }

    onVerificationCheck = (text : string) =>{
        this.props.store.dispatch({ type: ActionType.VerificationCheck, text});
    }

    onSetVerification = (text : string) =>{
        this.props.store.dispatch({ type: ActionType.SetVerification, text});
    }

    onSubmitData = (event : any) =>{
        if(!Utils.stringIsNullOrEmpty(this.props.store.getState().loginName)&&
            !this.props.store.getState().loginNameError &&
            !Utils.stringIsNullOrEmpty(this.props.store.getState().password)&&
            !this.props.store.getState().passwordError &&
            !Utils.stringIsNullOrEmpty(this.props.store.getState().verification)&&
            !this.props.store.getState().verificationError){

            //submit data and jump next step

            this.context.router.push("/")

        }else{
            this.onLoginNameCheck(this.props.store.getState().loginName);
            this.onPasswordCheck(this.props.store.getState().password);
            this.onVerificationCheck(this.props.store.getState().verification);
        }
    }

    render(){
        return (
            <div className="form-content col-md-12" >
                <div className="col-md-8 col-md-offset-2">
                    <div className="form-group">
                        <label className="form-text" >账号：</label>
                        <input type="text" placeholder="请输入登录账号，用户名/手机号码/邮箱账号，任选其一"
                               className={this.props.store.getState().loginNameError ? "form-control error-border" : "form-control"}
                               onBlur={ e => this.onLoginNameCheck(e.target.value)}
                               onChange={e => this.onSetLoginName(e.target.value) }
                               value={ this.props.store.getState().loginName } />
                        <label className="tf-error" style={{display:this.props.store.getState().loginNameError ? "block" : "none"}}>
                            { this.props.store.getState().loginNameErrorInfo }
                        </label>
                    </div>
                    <div className="form-group">
                        <label className="form-text" >密码：</label>
                        <input type="password" placeholder="请输入登录密码"
                               className={this.props.store.getState().passwordError ? "form-control error-border" : "form-control"}
                               onBlur={ e => this.onPasswordCheck(e.target.value)}
                               onChange={e => this.onSetPassword(e.target.value) }
                               value={ this.props.store.getState().password } />
                        <label className="tf-error" style={{display:this.props.store.getState().passwordError ? "block" : "none"}}>
                            { this.props.store.getState().passwordErrorInfo }
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
                        <button type="button" className="btn" onClick={ e => this.onSubmitData(e) }>立即登录</button>
                    </div>
                    <div className="form-group">
                        <div className="loginlink">
                            <div className="left">
                                <Link to="/register">忘记密码？</Link>
                            </div>
                            <div className="right">
                                还没有账号？<Link to="/register">去注册</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

