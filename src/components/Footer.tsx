import * as React from "react";
import { Link } from 'react-router';
import { LinksConstant } from "../constants/links.constant";

export class Footer extends React.Component<any, any>{
    render(){
        return (
            <footer className="footer">
                <div className="footercontent">
                    <div className="footermain row">
                        <div className="footerabout col-md-4">
                            <h1>关于BDots</h1>
                            <p className="title">生活小点滴，人生大智慧</p>
                            <p>BDots, 为自己记录生活中的点点滴滴。</p>
                        </div>
                        <div className="footerinfo col-md-4">
                            <h1>快速链接</h1>
                            <p><a href={LinksConstant.GitUrl}>GitHub</a></p>
                            <p><a href={LinksConstant.BlogUrl} target="_blank">博客</a></p>
                            <p><a href={LinksConstant.BBSUrl} target="_blank">论坛</a></p>
                        </div>
                        <div className="footerwechart col-md-4">
                            <h1>微信号</h1>
                            <img src={LinksConstant.WebChartQRCodeImgUrl} alt="" title="" />
                        </div>
                    </div>
                    <div className="footerlinks">
                        <ul>
                            <li>Copyright © 2016 ( 苏ICP备15007316号 )</li>
                            <li><Link to="/about">联系我们</Link></li>
                            <li><Link to="/help">帮助</Link></li>
                            <li><Link to="/feedback">反馈</Link></li>
                        </ul>
                    </div>
                </div>
            </footer>
        );
    }
}
