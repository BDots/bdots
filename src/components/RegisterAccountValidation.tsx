import * as React from "react";


import { Utils } from '../utils/Utils';
import { RegisterCheck } from "../utils/register.checks";

import { ActionType } from "../constants/actiontype.constant";

/// <reference path="../interfaces/register.interface.d.ts"/>

@Utils.subscribeToStore()
export class RegisterAccountValidation extends React.Component<any, any>{

    onUserPhoneCheck = (text : string) =>{
        this.props.store.dispatch({ type: ActionType.UserPhoneCheck, text});
    }

    onSetUserPhone = (text : string) =>{
        this.props.store.dispatch({ type: ActionType.SetUserPhone, text});
    }

    onPhoneCodeCheck = (text : string) =>{
        this.props.store.dispatch({ type: ActionType.PhoneCodeCheck, text});
    }

    onSetPhoneCode = (text : string) =>{
        this.props.store.dispatch({ type: ActionType.SetPhoneCode, text});
    }

    onSendPhoneCode = (event :any) =>{
        this.onUserPhoneCheck(this.props.store.getState().userPhone);
        this.props.store.dispatch({ type: ActionType.SendPhoneCode});
    }

    onSubmitData = (event : any) =>{
        if(!Utils.stringIsNullOrEmpty(this.props.store.getState().userPhone)&&
            !this.props.store.getState().userPhoneError &&
            !Utils.stringIsNullOrEmpty(this.props.store.getState().phoneCode)&&
            !this.props.store.getState().phoneCodeError  ){

            //submit data and jump next step

            this.props.store.dispatch({ type: ActionType.SubmitSupplementaryInfoData});

        }else{
            this.onUserPhoneCheck(this.props.store.getState().userPhone);
            this.onPhoneCodeCheck(this.props.store.getState().phoneCode);
        }
    }

    render(){
        return (
            <div className="form-content col-md-12" >
                <div className="col-md-8 col-md-offset-2">
                    <div className="form-group">
                        <label className="form-text" >手机号码（必填）：</label>
                        <div className={this.props.store.getState().userPhoneError ? "phone-number div-border error-border" : "phone-number div-border"} >
                            <input type="text" placeholder="请输入手机号码"
                                   className="form-control"
                                   onBlur={e => this.onUserPhoneCheck(e.target.value)}
                                   onChange={e => this.onSetUserPhone(e.target.value) }
                                   value={ this.props.store.getState().userPhone } />
                            <button type="button"
                                    className="btn send-btn"
                                    onClick={ e => this.onSendPhoneCode(e) }
                                    disabled={ this.props.store.getState().userPhoneError || this.props.store.getState().phoneCodeCountdown != 0 ? "disabled" : ""}>
                                点击发送验证码</button>
                        </div>
                        <label className="tf-error" style={{display:this.props.store.getState().userPhoneError ? "block" : "none"}}>
                            { this.props.store.getState().userPhoneErrorInfo }
                        </label>
                    </div>
                    <div className="form-group">
                        <label className="form-text" >验证码：</label>
                        <input type="text" placeholder="请输入手机接收到的验证码"
                               className={this.props.store.getState().phoneCodeError ? "form-control error-border" : "form-control"}
                               onBlur={e => this.onPhoneCodeCheck(e.target.value)}
                               onChange={e => this.onSetPhoneCode(e.target.value) }
                               value={ this.props.store.getState().phoneCode } />
                        <label className="tf-error" style={{display:this.props.store.getState().phoneCodeError ? "block" : "none"}}>
                            { this.props.store.getState().phoneCodeErrorInfo }
                        </label>
                    </div>
                    <div className="form-group">
                        <button type="button" className="btn" onClick={ e => this.onSubmitData(e) }>立即提交</button>
                    </div>
                </div>
            </div>
        );
    }
}

