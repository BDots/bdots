import * as React from "react";

export class RegisterStepBar extends React.Component<any, any>{
    render(){
        return (
            <div className="form-header col-md-12">
                <div className={this.props.activeindex == "1" ||  this.props.activeindex == "2" || this.props.activeindex == "3"  ? "col-md-4 active" : "col-md-4" }>
                    <h1>
                        <i>1</i>
                        填写注册信息</h1>
                </div>
                <div className= {this.props.activeindex == "2" || this.props.activeindex == "3"  ? "col-md-4 active" : "col-md-4" }>
                    <h1>
                        <i>2</i>
                        账号验证</h1>
                </div>
                <div className={this.props.activeindex == "3" ? "col-md-4 active" : "col-md-4" }>
                    <h1>
                        <i>3</i>
                        注册完成</h1>
                </div>
            </div>
        );
    }
}
