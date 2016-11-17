import * as React from "react";
import { Link } from 'react-router';
import { LinksConstant } from "../constants/links.constant";

export class TopToolbar extends React.Component<any, any>{
    render(){
        return (
            <div className="toptoolbar">
                <div className="toptoolbarcontent">
                    <div className="row">
                        <div className="leftmenu col-md-6">
                            <ul>
                                <li><Link to="/register">注册</Link></li>
                                <li><Link to="/login">亲，请登录</Link></li>
                            </ul>
                        </div>
                        <div className="rightmenu col-md-6">
                            <ul>
                                <li><Link to="/">首页</Link></li>
                                <li><a href={LinksConstant.BlogUrl} target="_blank">博客</a></li>
                                <li><a href={LinksConstant.BBSUrl} target="_blank">论坛</a></li>
                                <li><a href={LinksConstant.DemoUrl} target="_blank">案例</a></li>
                                <li><a href="###">收藏站点</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
