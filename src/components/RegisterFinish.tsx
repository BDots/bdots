import * as React from "react";
import { Link } from 'react-router';

export class RegisterFinish extends React.Component<any, any>{


    render(){
        return (
            <div className="register-finish">
                <h1>恭喜您注册成功，您可以选择用户名，手机号，或者邮箱账号，作为您的登录凭证。</h1>
                <p>推荐您进行下面的操作：</p>
                <ul>
                    <li><Link to="/">补填个人资料</Link></li>
                    <li><Link to="/">设置账号安全</Link></li>
                    <li><Link to="/">进入个人中心</Link></li>
                    <li><Link to="/">浏览站点导航</Link></li>
                    <li><Link to="/">站点帮助</Link></li>
                    <li><Link to="/login">登录</Link>或者<Link to="/">返回首页</Link></li>
                </ul>
            </div>
        );
    }
}

